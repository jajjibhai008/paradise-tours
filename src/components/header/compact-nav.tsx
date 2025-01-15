"use client"

import Link from "next/link"

const navItems = [
  { label: "HOME", href: "/" },
  { label: "TOUR LIST", href: "/tour-list" },
  { label: "TOUR SEARCH", href: "/tour-search" },
  { label: "DESTINATIONS", href: "/destinations" },
  { label: "PAGES", href: "/pages" },
  { label: "BLOG", href: "/blog" },
]

export function CompactNav() {
  return (
    <nav className="bg-white backdrop-blur-sm shadow-md py-1">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs text-gray-600 font-extrabold font-poppins hover:text-gray-700"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
} 