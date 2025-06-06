"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolledUp, setIsScrolledUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);

  // Handle click outside mobile menu
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        hamburgerButtonRef.current &&
        !hamburgerButtonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        // Only activate after some scrolling
        if (currentScrollY > lastScrollY && isScrolledUp) {
          // Scrolling down
          setIsScrolledUp(false);
        } else if (currentScrollY < lastScrollY && !isScrolledUp) {
          // Scrolling up
          setIsScrolledUp(true);
        }
      } else {
        // At top of page
        setIsScrolledUp(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isScrolledUp]);

  return (
    <nav
      ref={navbarRef}
      className={`bg-blue-800 text-white p-4 shadow-md fixed top-0 z-50 w-full transition-transform duration-300 ease-in-out ${
        isScrolledUp ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold whitespace-nowrap hover:text-blue-200 transition-colors duration-200"
        >
          Education Zone
        </Link>

        <button
          ref={hamburgerButtonRef}
          className="hidden max-[750px]:block hover:scale-110 transition-transform duration-200"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <div className="flex space-x-6 whitespace-nowrap max-[750px]:hidden">
          <Link
            href="/"
            className="relative group hover:text-blue-200 transition-colors duration-200"
          >
            Home
            <span className="absolute left-0 bottom-0 h-0.5 bg-blue-200 w-0 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/about"
            className="relative group hover:text-blue-200 transition-colors duration-200"
          >
            About Us
            <span className="absolute left-0 bottom-0 h-0.5 bg-blue-200 w-0 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/courses"
            className="relative group hover:text-blue-200 transition-colors duration-200"
          >
            Courses
            <span className="absolute left-0 bottom-0 h-0.5 bg-blue-200 w-0 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/gallery"
            className="relative group hover:text-blue-200 transition-colors duration-200"
          >
            Gallery
            <span className="absolute left-0 bottom-0 h-0.5 bg-blue-200 w-0 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/contact"
            className="relative group hover:text-blue-200 transition-colors duration-200"
          >
            Contact
            <span className="absolute left-0 bottom-0 h-0.5 bg-blue-200 w-0 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/admission"
            className="relative group hover:text-blue-200 transition-colors duration-200"
          >
            Admission
            <span className="absolute left-0 bottom-0 h-0.5 bg-blue-200 w-0 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        ref={mobileMenuRef}
        className={`max-[750px]:fixed bg fixed top-0 right-0 h-[100vh] w-64 bg-blue-900 transform transition-transform duration-300 ease-in-out z-50 p-6 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 hover:scale-110 transition-transform duration-200"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="flex flex-col space-y-6 mt-16 whitespace-nowrap">
          {[
            { href: "/", text: "Home" },
            { href: "/about", text: "About Us" },
            { href: "/courses", text: "Courses" },
            { href: "/gallery", text: "Gallery" },
            { href: "/contact", text: "Contact" },
            { href: "/admission", text: "Admission" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-lg py-2 px-4 rounded hover:bg-blue-700 hover:pl-6 transition-all duration-300"
            >
              {item.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
