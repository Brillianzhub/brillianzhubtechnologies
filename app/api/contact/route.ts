import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/schema";
import { checkRateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() ?? "unknown";
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(request: NextRequest) {
  const redirectUrl = new URL("/contact", request.url);
  const formData = await request.formData();

  const raw = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    message: String(formData.get("message") ?? ""),
    company: String(formData.get("company") ?? ""),
  };

  if (raw.company) {
    redirectUrl.searchParams.set("sent", "1");
    return NextResponse.redirect(redirectUrl, { status: 303 });
  }

  const ip = getClientIp(request);
  if (!checkRateLimit(ip)) {
    redirectUrl.searchParams.set("error", "rate");
    redirectUrl.searchParams.set("name", raw.name);
    redirectUrl.searchParams.set("email", raw.email);
    redirectUrl.searchParams.set("message", raw.message);
    return NextResponse.redirect(redirectUrl, { status: 303 });
  }

  const result = contactSchema.safeParse(raw);

  if (!result.success) {
    const fieldErrors = result.error.flatten().fieldErrors;
    redirectUrl.searchParams.set("error", "validation");
    if (fieldErrors.name?.[0]) redirectUrl.searchParams.set("err_name", fieldErrors.name[0]);
    if (fieldErrors.email?.[0]) redirectUrl.searchParams.set("err_email", fieldErrors.email[0]);
    if (fieldErrors.message?.[0]) redirectUrl.searchParams.set("err_message", fieldErrors.message[0]);
    redirectUrl.searchParams.set("name", raw.name);
    redirectUrl.searchParams.set("email", raw.email);
    redirectUrl.searchParams.set("message", raw.message);
    return NextResponse.redirect(redirectUrl, { status: 303 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.RESEND_TO_EMAIL;

  if (!apiKey || !toEmail) {
    redirectUrl.searchParams.set("error", "server");
    redirectUrl.searchParams.set("name", raw.name);
    redirectUrl.searchParams.set("email", raw.email);
    redirectUrl.searchParams.set("message", raw.message);
    return NextResponse.redirect(redirectUrl, { status: 303 });
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "Brillianzhub website <onboarding@resend.dev>",
      to: toEmail,
      replyTo: result.data.email,
      subject: `New contact form message from ${result.data.name}`,
      text: `From: ${result.data.name} <${result.data.email}>\n\n${result.data.message}`,
    });
  } catch {
    redirectUrl.searchParams.set("error", "server");
    redirectUrl.searchParams.set("name", raw.name);
    redirectUrl.searchParams.set("email", raw.email);
    redirectUrl.searchParams.set("message", raw.message);
    return NextResponse.redirect(redirectUrl, { status: 303 });
  }

  redirectUrl.searchParams.set("sent", "1");
  return NextResponse.redirect(redirectUrl, { status: 303 });
}
