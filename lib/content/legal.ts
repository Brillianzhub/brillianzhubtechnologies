export type LegalSection = {
  heading: string;
  body: string[];
};

export const privacyContent: {
  updated: string;
  intro: string;
  sections: LegalSection[];
} = {
  updated: "8 September 2026",
  intro:
    "This policy covers brillianzhub.com only — the marketing website for Brillianzhub Technologies Limited. It does not cover our apps. Each product (SuperPrep, Realvista Properties, IPrayDaily) has its own in-app privacy policy, linked from within that app and from its page on this site, which governs the data that product collects.",
  sections: [
    {
      heading: "What this site collects",
      body: [
        "This website does not use cookies, analytics, or tracking scripts of any kind. The only personal data we collect is what you submit through the contact form: your name, your email address, and the message you send us.",
        "We also process your IP address transiently, in memory, to apply a rate limit that prevents abuse of the contact form. It is not stored or logged.",
      ],
    },
    {
      heading: "How we use it",
      body: [
        "Contact form submissions are sent directly to our support inbox by email and used only to respond to your enquiry. We do not add you to a mailing list, sell your information, or share it with third parties, other than our email delivery provider (Resend), which processes the message solely to deliver it to us.",
      ],
    },
    {
      heading: "Retention",
      body: [
        "Contact form submissions live in our email inbox for as long as normal email retention applies, and are deleted when no longer needed. We keep no separate database of submissions.",
      ],
    },
    {
      heading: "Your rights",
      body: [
        "You can ask us what data we hold about you, ask us to correct it, or ask us to delete it, at any time, by emailing contact@brillianzhub.com.",
      ],
    },
    {
      heading: "Contact",
      body: [
        "For any question about this policy or a data request, write to contact@brillianzhub.com.",
      ],
    },
  ],
};

export const termsContent: {
  updated: string;
  intro: string;
  sections: LegalSection[];
} = {
  updated: "8 September 2026",
  intro:
    "These terms cover use of brillianzhub.com, the marketing website for Brillianzhub Technologies Limited (\"Brillianzhub\", \"we\", \"us\"). Each of our products has its own terms of use, presented within that product.",
  sections: [
    {
      heading: "Use of this site",
      body: [
        "This site is provided to give information about Brillianzhub Technologies Limited and its products. You may view and share its content for personal, non-commercial purposes. You may not copy, republish, or reuse substantial parts of the site without our written permission.",
      ],
    },
    {
      heading: "Ownership of marks",
      body: [
        "Brillianzhub, and the names of our products (SuperPrep, Realvista Properties, IPrayDaily), together with associated logos and marks, are owned by Brillianzhub Technologies Limited. Nothing on this site grants you a licence to use them.",
      ],
    },
    {
      heading: "No warranty",
      body: [
        "This site is provided \"as is\", without warranty of any kind, express or implied. We make reasonable efforts to keep it accurate and available but do not guarantee uninterrupted access or that its content is free of error.",
      ],
    },
    {
      heading: "Limitation of liability",
      body: [
        "To the fullest extent permitted by law, Brillianzhub Technologies Limited is not liable for any indirect, incidental, or consequential loss arising from your use of this site.",
      ],
    },
    {
      heading: "Governing law",
      body: [
        "These terms are governed by the laws of the Federal Republic of Nigeria, and any dispute arising from them is subject to the exclusive jurisdiction of the Nigerian courts.",
      ],
    },
    {
      heading: "Contact",
      body: ["Questions about these terms can be sent to contact@brillianzhub.com."],
    },
  ],
};

export type SupportChannel = {
  product: string;
  detail: string;
};

export const supportContent: {
  intro: string;
  responseTime: string;
  channels: SupportChannel[];
} = {
  intro:
    "For help with any Brillianzhub product, write to us and we'll route your message to the right team.",
  responseTime: "We aim to respond to every support request within 2 business days.",
  channels: [
    {
      product: "SuperPrep",
      detail:
        "For account, billing, or tutoring questions, email contact@brillianzhub.com with \"SuperPrep\" in the subject line, or use in-app support under Settings → Help.",
    },
    {
      product: "Realvista Properties",
      detail:
        "For listing, account, or transaction questions, email contact@brillianzhub.com with \"Realvista\" in the subject line, or use in-app support under Settings → Help.",
    },
    {
      product: "IPrayDaily",
      detail:
        "For questions about content or app functionality, email contact@brillianzhub.com with \"IPrayDaily\" in the subject line.",
    },
  ],
};
