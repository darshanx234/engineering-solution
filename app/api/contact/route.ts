import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

// Simple in-memory storage (use database for production)
const submissions: any[] = []
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await request.json()

    // Validate input
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    // Store submission
    submissions.push({
      id: Date.now(),
      name,
      email,
      phone,
      subject,
      message,
      timestamp: new Date().toISOString(),
    })

    // Send email via Resend
    try {
      const result = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "darshanc4455@gmail.com",
        replyTo: email,
        subject: `New Contact: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">New Contact Form Submission</h2>
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
              <p><strong style="color: #0066cc;">Name:</strong> ${name}</p>
              <p><strong style="color: #0066cc;">Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong style="color: #0066cc;">Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
              <p><strong style="color: #0066cc;">Subject:</strong> ${subject}</p>
            </div>
            
            <h3 style="color: #333; margin-top: 20px;">Message:</h3>
            <div style="background-color: #fafafa; padding: 15px; border-left: 4px solid #0066cc; border-radius: 4px;">
              <p style="white-space: pre-wrap; line-height: 1.6; color: #555;">${message.replace(/\n/g, "\n")}</p>
            </div>
            
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            <p style="color: #999; font-size: 12px;">
              Submitted at: ${new Date().toLocaleString()}
            </p>
          </div>
        `,
      })

      console.log("Email sent successfully:", result)
    } catch (emailError) {
      console.error("Email sending error:", emailError)
      // Don't fail the request if email fails, but log it
      // The form data is still saved
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out! We'll get back to you soon.",
        data: { name, email, subject },
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to process your request. Please try again." },
      { status: 500 }
    )
  }
}

// Optional: GET endpoint to view submissions (only in development)
export async function GET(request: NextRequest) {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Not allowed" }, { status: 403 })
  }
  return NextResponse.json(submissions)
}
