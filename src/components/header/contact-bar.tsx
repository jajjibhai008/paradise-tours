import { Mail, Phone } from 'lucide-react'
import Link from "next/link"

export function ContactBar() {
  return (
    <div className="bg-transparent pt-1 text-sm">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center gap-6">
          <Link 
            href="tel:+41216340505" 
            className="flex items-center gap-2 text-black hover:text-foreground transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>+92 309 8504550</span>
          </Link>
          <Link 
            href="mailto:info@paradisetours.pk" 
            className="flex items-center gap-2 text-black hover:text-foreground transition-colors"
          >
            <Mail className="h-4 w-4" />
            <span>info@paradisetours.pk</span>
          </Link>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <Link href="/facebook" className="text-black hover:text-foreground">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link href="/linkedin" className="text-black hover:text-foreground">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link href="/twitter" className="text-black hover:text-foreground">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

