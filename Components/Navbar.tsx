"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null);

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

  return (
    <nav className="bg-blue-800 text-white p-4 shadow-md fixed top-0 z-100 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold whitespace-nowrap">
          Education Zone
        </Link>
        <button
          ref={hamburgerButtonRef}
          className="hidden max-[750px]:block"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <div className="flex space-x-4 whitespace-nowrap max-[750px]:hidden">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/admission">Admission</Link>
        </div>
      </div>

      {/* Mobile menu - no overlay */}
      <div
        ref={mobileMenuRef}
        className={`max-[750px]:fixed fixed top-0 right-0 h-full w-64 bg-blue-900 transform transition-transform duration-300 ease-in-out z-50 p-6 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="flex flex-col space-y-4 mt-16 whitespace-nowrap">
          <Link href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>
            About Us
          </Link>
          <Link href="/courses" onClick={() => setIsOpen(false)}>
            Courses
          </Link>
          <Link href="/gallery" onClick={() => setIsOpen(false)}>
            Gallery
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <Link href="/admission" onClick={() => setIsOpen(false)}>
            Admission
          </Link>
        </div>
      </div>
    </nav>
  );
}
