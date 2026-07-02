import { NextRequest, NextResponse } from "next/server";
import { sendWebsiteMail } from "../../../lib/server-mail";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = String(body?.email || "").trim();
    const source = String(body?.source || "unknown").trim();

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    await sendWebsiteMail({
      subject: `Subscription request - ${source}`,
      text: [
        "New subscription request",
        `Email: ${email}`,
        `Source: ${source}`,
        `Submitted at: ${new Date().toISOString()}`,
      ].join("\n"),
    });

    return NextResponse.json(
      { success: true, message: "You are on the list." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error handling subscribe request:", error);
    return NextResponse.json(
      { success: false, message: "Failed to subscribe" },
      { status: 500 }
    );
  }
}
