"use server"

import { Resend } from "resend"

// Initialize Resend with your API key
// In production, you would use an environment variable
const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendContactForm(data: ContactFormData) {
  const { name, email, subject, message } = data

  try {
    // In a real application, you would send an email here
    // This is a placeholder for the actual email sending logic
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: "Portfolio Contact <contact@yourdomain.com>",
        to: "your-email@example.com", // Replace with your email
        subject: `New Contact Form: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      })
    } else {
      // For development without an API key, log the data
      console.log("Contact form submission:", { name, email, subject, message })
    }

    return { success: true }
  } catch (error) {
    console.error("Error sending contact form:", error)
    throw new Error("Failed to send contact form")
  }
}
