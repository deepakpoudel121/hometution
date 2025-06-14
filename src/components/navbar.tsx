"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"
import { Logo } from "@/components/logo"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      // Close mobile menu if open
      if (isMenuOpen) setIsMenuOpen(false)

      // Scroll to the element with smooth behavior
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for the navbar height
        behavior: "smooth",
      })
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#how-it-works"
              onClick={(e) => scrollToSection(e, "how-it-works")}
              className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary transition-colors"
            >
              How It Works
            </a>
            <a
              href="#subjects"
              onClick={(e) => scrollToSection(e, "subjects")}
              className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary transition-colors"
            >
              Subjects
            </a>
            <a
              href="#tutors"
              onClick={(e) => scrollToSection(e, "tutors")}
              className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary transition-colors"
            >
              Find Tutors
            </a>
            <a
              href="#become-tutor"
              onClick={(e) => scrollToSection(e, "become-tutor")}
              className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary transition-colors"
            >
              Become a Tutor
            </a>
            <a
              href="#support"
              onClick={(e) => scrollToSection(e, "support")}
              className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary transition-colors"
            >
              Support
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" size="sm" className="border-slate-300 text-slate-700 dark:text-slate-300">
              Login
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary-dark text-white">
              Sign Up
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-2 p-2 rounded-md text-slate-600 dark:text-slate-400 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white dark:bg-slate-900 shadow-lg border-t border-slate-200 dark:border-slate-700"
        >
          <div className="px-4 pt-2 pb-6 space-y-3">
            <a
              href="#how-it-works"
              onClick={(e) => scrollToSection(e, "how-it-works")}
              className="block py-2 text-base font-medium text-slate-700 dark:text-slate-300 hover:text-primary"
            >
              How It Works
            </a>
            <a
              href="#subjects"
              onClick={(e) => scrollToSection(e, "subjects")}
              className="block py-2 text-base font-medium text-slate-700 dark:text-slate-300 hover:text-primary"
            >
              Subjects
            </a>
            <a
              href="#tutors"
              onClick={(e) => scrollToSection(e, "tutors")}
              className="block py-2 text-base font-medium text-slate-700 dark:text-slate-300 hover:text-primary"
            >
              Find Tutors
            </a>
            <a
              href="#become-tutor"
              onClick={(e) => scrollToSection(e, "become-tutor")}
              className="block py-2 text-base font-medium text-slate-700 dark:text-slate-300 hover:text-primary"
            >
              Become a Tutor
            </a>
            <a
              href="#support"
              onClick={(e) => scrollToSection(e, "support")}
              className="block py-2 text-base font-medium text-slate-700 dark:text-slate-300 hover:text-primary"
            >
              Support
            </a>
            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full justify-center border-slate-300 text-slate-700">
                Login
              </Button>
              <Button className="w-full justify-center bg-primary hover:bg-primary-dark text-white">Sign Up</Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
