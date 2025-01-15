import Link from "next/link"
import Image from "next/image"
import logo from "@/data/images/logo.png"

const navItems = [
  { label: "HOME", href: "/" },
  { label: "TOUR LIST", href: "/tour-list" },
  { label: "TOUR SEARCH", href: "/tour-search" },
  { label: "DESTINATIONS", href: "/destinations" },
  { label: "PAGES", href: "/pages" },
  { label: "BLOG", href: "/blog" },
]

export function MainNav() {
  return (
    <nav className="bg-transparent">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-8">
          {navItems.slice(0, 3).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm  text-gray-700 font-extrabold font-poppins hover:text-gray-700"
            >
              {item.label}
            </Link>
          ))}

          <Link href="/" className="relative w-20 h-20 mx-8">
            <Image
              src={logo}
              alt="Paradise Tours Logo"
              width={80}
              height={80}
              className="object-contain"
              priority
            />
          </Link>

          {navItems.slice(3).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm  text-gray-700 font-extrabold font-poppins hover:text-gray-700"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
