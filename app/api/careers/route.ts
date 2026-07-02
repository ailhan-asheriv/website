import { NextRequest, NextResponse } from "next/server";
import { sendWebsiteMail } from "../../../lib/server-mail";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const fullName = String(formData.get("fullName") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const roleInterest = String(formData.get("roleInterest") || "").trim();
    const introduction = String(formData.get("introduction") || "").trim();
    const cv = formData.get("cv");

    if (!fullName || !email || !roleInterest || !introduction) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    if (introduction.length > 500) {
      return NextResponse.json(
        { success: false, message: "Introduction must be 500 characters or less" },
        { status: 400 }
      );
    }

    if (!(cv instanceof File)) {
      return NextResponse.json(
        { success: false, message: "CV file is required" },
        { status: 400 }
      );
    }

    if (cv.type !== "application/pdf") {
      return NextResponse.json(
        { success: false, message: "CV must be a PDF file" },
        { status: 400 }
      );
    }

    const text = [
      "New careers application",
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Role interest: ${roleInterest}`,
      `Introduction: ${introduction}`,
      `CV filename: ${cv.name}`,
      `CV size bytes: ${cv.size}`,
      `Submitted at: ${new Date().toISOString()}`,
    ].join("\n");

    await sendWebsiteMail({
      subject: `Careers application - ${fullName}`,
      text,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you. We will be in touch if there is a fit.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error handling careers application:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit application" },
      { status: 500 }
    );
  }
}
