import { ImageResponse } from "next/og";
import { company } from "@/lib/content/company";

export const runtime = "edge";
export const alt = company.legalName;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F7F8F9",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#5B6672",
            marginBottom: 24,
          }}
        >
          {company.legalName}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 56,
            fontWeight: 500,
            color: "#0B1B2B",
            textAlign: "center",
            lineHeight: 1.2,
          }}
        >
          {company.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
