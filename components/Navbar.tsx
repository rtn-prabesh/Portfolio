"use client"

import * as React from "react"
import { Moon, Sun, Menu, X, Code2 } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative flex items-center justify-center p-2 rounded-full border border-border bg-background hover:bg-accent transition-colors"
      aria-label="Toggle theme"
    >
      <Moon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Sun className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    // Set initial state
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <div
        className={`fixed left-0 right-0 z-50 flex justify-center pointer-events-none transition-all duration-500 ${
          isScrolled ? "top-0 md:top-6 px-0 md:px-4" : "top-0 px-0"
        }`}
      >
        <nav
          className={`flex items-center pointer-events-auto transition-all duration-500 ${
            isScrolled
              ? "w-full md:w-fit justify-between md:justify-center p-4 md:p-3 px-4 md:px-6 rounded-none md:rounded-full border-b md:border border-border/40 md:border-black/10 md:dark:border-white/10 bg-background/80 md:bg-black/5 md:dark:bg-white/5 backdrop-blur-md md:backdrop-blur-lg shadow-none md:shadow-lg gap-2 md:gap-6"
              : "w-full justify-between p-4 md:px-8 border-b border-border/40 bg-background/80 backdrop-blur-md rounded-none gap-2"
          }`}
        >
          <Link
            href="/"
            className={`text-xl font-bold font-mono tracking-tighter transition-all duration-300 overflow-hidden ${
              isScrolled ? "w-12 md:w-0 opacity-100 md:opacity-0 m-0" : "w-12 opacity-100"
            }`}
          >
            
          </Link>
          
          {/* Desktop Links */}
          <div
            className={`hidden md:flex items-center text-sm font-medium text-muted-foreground transition-all duration-500 ${
              isScrolled ? "space-x-6 justify-center" : "space-x-6"
            }`}
          >
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <Link href="#projects" className="hover:text-foreground transition-colors">Projects</Link>
            <Link href="#about" className="hover:text-foreground transition-colors">About</Link>
            <Link href="#contact" className="hover:text-foreground transition-colors">Contact</Link>
          </div>
          
          <div className="flex items-center gap-2">
            <a href="https://github.com/rtn-prabesh" target="_blank" rel="noreferrer" className="flex items-center justify-center p-2 rounded-full border border-border bg-background hover:bg-accent transition-colors" aria-label="Source Code">
              <Code2 className="h-5 w-5" />
            </a>
            <ThemeToggle />
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center justify-center p-2 rounded-full border border-border bg-background hover:bg-accent transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md md:hidden pt-24 px-6 flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4 text-lg font-medium">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="py-2 border-b border-border hover:text-primary transition-colors">Home</Link>
              <Link href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="py-2 border-b border-border hover:text-primary transition-colors">Projects</Link>
              <Link href="#about" onClick={() => setIsMobileMenuOpen(false)} className="py-2 border-b border-border hover:text-primary transition-colors">About</Link>
              <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="py-2 border-b border-border hover:text-primary transition-colors">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
