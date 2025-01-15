"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { X, Home, Search, Map, List, Layout, BookOpen } from "lucide-react"
import logo from "@/data/images/logo.png"

interface MobileDrawerProps {
  isOpen: boolean
  onClose: () => void
  items: Array<{ label: string; href: string }>
}

export function MobileDrawer({ isOpen, onClose, items }: MobileDrawerProps) {
  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Map icons to menu items
  const getIcon = (label: string) => {
    switch (label) {
      case "HOME":
        return <Home className="h-5 w-5" />
      case "TOUR LIST":
        return <List className="h-5 w-5" />
      case "TOUR SEARCH":
        return <Search className="h-5 w-5" />
      case "DESTINATIONS":
        return <Map className="h-5 w-5" />
      case "PAGES":
        return <Layout className="h-5 w-5" />
      case "BLOG":
        return <BookOpen className="h-5 w-5" />
      default:
        return null
    }
  }

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div 
        className={`md:w-0 fixed top-0 left-0 bottom-0 w-[60vw] bg-white z-50 transform transition-transform duration-300 ease-in-out shadow-xl ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-gray-100">
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-6 w-6 text-gray-600" />
            </button>

            <div className="flex justify-center my-4">
              <Link href="/" onClick={onClose}>
                <Image
                  src={logo}
                  alt="Paradise Tours Logo"
                  width={120}
                  height={120}
                  className="object-contain"
                  priority
                />
              </Link>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto py-4">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-4 px-6 py-4 text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                onClick={onClose}
              >
                <span className="text-gray-500">{getIcon(item.label)}</span>
                <span className="font-semibold tracking-wide text-sm">{item.label}</span>
              </Link>
            ))}
          </div>

          <div className="p-6 border-t border-gray-100">
            <div className="flex justify-center space-x-4">
              <a href="/facebook" className="text-gray-500 hover:text-gray-900 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="/twitter" className="text-gray-500 hover:text-gray-900 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="/linkedin" className="text-gray-500 hover:text-gray-900 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}