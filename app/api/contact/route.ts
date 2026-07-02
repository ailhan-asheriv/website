import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, role, subject, product, message } = body;

    // Log the contact form submission (replace with email service later)
    console.log("Contact form submission:", {
      name,
      email,
      company,
      role,
      subject,
      product,
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Replace this with actual email service integration
    // Example services: SendGrid, Resend, AWS SES, etc.

    return NextResponse.json(
      { success: true, message: "Contact form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process contact form" },
      { status: 500 }
    );
  }
}


