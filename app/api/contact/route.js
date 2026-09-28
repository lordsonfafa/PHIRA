import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request) {
  try {
    // Initialize inside the route handler
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { fullName, email, phone, details } = await request.json();

    await resend.emails.send({
      from: "Phira Contact Form <onboarding@resend.dev>",
      to: [process.env.CONTACT_FORM_RECIPIENT_EMAIL],
      subject: `New Lead from ${fullName}`,
      html: `
        <h2>New Inquiry Submitted</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Details:</strong></p>
        <p>${details}</p>
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 },
    );
  }
}
