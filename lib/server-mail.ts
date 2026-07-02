import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const MAIL_FROM = process.env.RESEND_FROM_EMAIL || "Asheriv Website <no-reply@asheriv.com>";
const MAIL_TO = process.env.RESEND_TO_EMAIL || "info@asheriv.com";

export async function sendWebsiteMail(args: {
  subject: string;
  text: string;
}) {
  if (!RESEND_API_KEY) {
    console.log("RESEND_API_KEY not configured, logging email payload instead.", {
      to: MAIL_TO,
      from: MAIL_FROM,
      subject: args.subject,
      text: args.text,
    });
    return { sent: false as const, reason: "missing_api_key" as const };
  }

  const resend = new Resend(RESEND_API_KEY);
  await resend.emails.send({
    from: MAIL_FROM,
    to: [MAIL_TO],
    subject: args.subject,
    text: args.text,
  });

  return { sent: true as const };
}
