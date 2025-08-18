import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full bg-muted py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground">© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <Link href="/portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
              Portfolio
            </Link>
            <Link href="/skills" className="text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
            <Link href="/design-system" className="text-muted-foreground hover:text-foreground transition-colors">
              Design System
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
