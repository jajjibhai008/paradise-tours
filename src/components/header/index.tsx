"use client"

import { useEffect, useState } from "react"
import { Menu } from "lucide-react"
import { ContactBar } from "@/components/header/contact-bar"
import { MainNav } from "@/components/header/nav"
import { CompactNav } from "@/components/header/compact-nav"
import { MobileDrawer } from "@/components/header/mobile-drawer"

const navItems = [
  { label: "HOME", href: "/" },
  { label: "TOUR LIST", href: "/tour-list" },
  { label: "TOUR SEARCH", href: "/tour-search" },
  { label: "DESTINATIONS", href: "/destinations" },
  { label: "PAGES", href: "/pages" },
  { label: "BLOG", href: "/blog" },
]

export function Header() {
  const [showMainHeader, setShowMainHeader] = useState(true)
  const [showCompactHeader, setShowCompactHeader] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY

      if (scrollPosition < 100) {
        setShowMainHeader(true)
        setShowCompactHeader(false)
      }
      else if (scrollPosition >= 100) {
        setShowMainHeader(false)
        setShowCompactHeader(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header 
        className={`max-w-screen fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-sm shadow-md transition-transform duration-500 hidden md:block ${
          showMainHeader ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <ContactBar />
        <MainNav />
      </header>

      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 hidden md:block ${
          showCompactHeader ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <CompactNav />
      </header>

      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="fixed top-4 left-4 z-50 p-2 text-gray-700 bg-white/70 backdrop-blur-sm rounded-full md:hidden"
      >
        <Menu className="h-5 w-5" />
      </button>
        
      {/* <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        items={navItems}
      /> */}
    </>
  )
}
