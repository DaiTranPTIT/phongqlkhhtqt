"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Search, Bell, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const categoryRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        categoryRef.current &&
        !categoryRef.current.contains(event.target as Node)
      ) {
        setIsCategoryOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "News", href: "/news" },
    { name: "Trending", href: "/trending" },
    { name: "Favorites", href: "/favorites" },
    { name: "My Saved", href: "/saved" },
  ];

  const categories = [
    { name: "All", href: "/news" },
    { name: "AI & Machine Learning", href: "/news?category=ai" },
    { name: "Blockchain & Crypto", href: "/news?category=blockchain" },
    { name: "Mobile Technology", href: "/news?category=mobile" },
    { name: "Cybersecurity", href: "/news?category=cybersecurity" },
    { name: "Cloud Computing", href: "/news?category=cloud" },
    { name: "IoT & Smart Devices", href: "/news?category=iot" },
    { name: "VR/AR", href: "/news?category=vr-ar" },
    { name: "Startups", href: "/news?category=startups" },
    { name: "Hardware", href: "/news?category=hardware" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img
              src="/LOGO PTIT IEC_FINAL-01.png"
              alt="PTIT IEC Logo"
              className="h-10 w-auto"
            />
            <h1 className="text-xl font-bold gradient-text">TechNews</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.slice(0, 2).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-orange-400 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}

            {/* Categories Dropdown */}
            <div className="relative" ref={categoryRef}>
              <button
                className="flex items-center gap-1 text-slate-300 hover:text-orange-400 transition-colors font-medium"
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              >
                Categories
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isCategoryOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isCategoryOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-slate-800 rounded-lg shadow-lg border border-slate-700 py-2 z-50">
                  {categories.map((category) => (
                    <a
                      key={category.name}
                      href={category.href}
                      className="block px-4 py-2 text-sm text-slate-300 hover:text-orange-400 hover:bg-slate-700 transition-colors"
                      onClick={() => setIsCategoryOpen(false)}
                    >
                      {category.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(2).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-orange-400 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:flex text-slate-300 hover:text-orange-400"
            >
              <Search className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:flex text-slate-300 hover:text-orange-400"
            >
              <Bell className="w-4 h-4" />
            </Button>
            <Button className="hidden sm:flex bg-orange-500 hover:bg-orange-600 text-white">
              Subscribe
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-slate-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-800 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.slice(0, 2).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-300 hover:text-orange-400 transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}

              {/* Mobile Categories */}
              <div className="border-t border-slate-700 pt-4">
                <h3 className="text-slate-400 text-sm font-medium mb-2">
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <a
                      key={category.name}
                      href={category.href}
                      className="block text-sm text-slate-300 hover:text-orange-400 transition-colors pl-4"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {category.name}
                    </a>
                  ))}
                </div>
              </div>

              {navLinks.slice(2).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-300 hover:text-orange-400 transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-4 border-t border-slate-800">
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
