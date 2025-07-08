import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <main className="min-h-screen py-12 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Get in Touch</h1>
          <p className="text-muted-foreground mb-8 text-center">
            Have a project in mind or want to discuss a collaboration? Fill out the form below and I'll get back to you
            as soon as possible.
          </p>

          <ContactForm />
        </div>
      </div>
    </main>
  )
}
