"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  // Create refs for animation elements
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const buttonRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    // Animation timeline
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Initial state (hidden)
    gsap.set([headingRef.current, subheadingRef.current, buttonRef.current], {
      opacity: 0,
      y: 20,
    });
    gsap.set(overlayRef.current, { opacity: 0 });

    // Animation sequence
    tl.to(overlayRef.current, {
      opacity: 1,
      duration: 1.5,
    })
      .to(
        headingRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.8"
      )
      .to(
        subheadingRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
        },
        "-=0.4"
      )
      .to(
        buttonRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          onComplete: () => {
            // Add subtle hover animation to button
            gsap.to(buttonRef.current, {
              scale: 1.05,
              repeat: -1,
              yoyo: true,
              duration: 2,
              ease: "sine.inOut",
            });
          },
        },
        "-=0.3"
      );

    // Clean up animations on unmount
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-130 mt-15 lg:h-160 flex justify-center items-center flex-col shadow-lg overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          className="object-cover"
          src="/hero.jpg"
          alt="Education Zone background"
          layout="fill"
          quality={100}
          priority
        />
        {/* Gradient Overlay with animation ref */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-indigo-700/30"
        ></div>
      </div>

      {/* Content with animation refs */}
      <div className="relative z-10 text-center px-4 w-full max-w-6xl">
        <h1
          ref={headingRef}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-lg"
        >
          Education Zone Computer Institute
        </h1>
        <p
          ref={subheadingRef}
          className="text-lg sm:text-xl md:text-2xl mb-8 text-white drop-shadow-md"
        >
          Empowering the digital generation
        </p>
        <div ref={buttonRef}>
          <Link href="/courses" passHref>
            <button className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 text-lg sm:text-xl transform hover:scale-105 shadow-lg">
              Explore Courses
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
