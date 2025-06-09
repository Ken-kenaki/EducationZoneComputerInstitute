"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  const cards = [
    {
      title: "Expert Instruction",
      points: [
        "Experienced and certified instructors",
        "Personalized attention",
        "Industry-experienced faculty",
      ],
      bgColor: "bg-[#001f99]",
      textColor: "text-white",
      link: "/expert-instruction",
    },
    {
      title: "Quality Education",
      points: [
        "Industry-relevant curriculum",
        "Hands-on training and projects",
        "Affordable fee structure",
      ],
      bgColor: "bg-[#ff0000]",
      textColor: "text-white",
      link: "/quality-education",
    },
  ];

  useEffect(() => {
    if (!headingRef.current) return;

    // Animate the heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 90%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // Animate each card
    const elements = gsap.utils.toArray<HTMLElement>(".why-card");
    elements.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
          delay: i * 0.1,
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <h2
        ref={headingRef}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
        style={{ color: "#003366" }}
      >
        Why Choose Us?
      </h2>
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-6xl">
        {cards.map((card, idx) => (
          <Link href={card.link} key={idx}>
            <a
              className={`
                ${card.bgColor} ${card.textColor}
                why-card p-10 rounded-2xl shadow-xl 
                transition-all duration-300 h-full 
                cursor-pointer hover:shadow-2xl hover:scale-[1.02]
              `}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-8">
                {card.title}
              </h3>
              <ul className="space-y-5 text-lg md:text-xl">
                {card.points.map((point, pointIdx) => (
                  <li key={pointIdx} className="flex items-start">
                    <span className="mr-3 text-2xl">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 text-lg font-semibold flex items-center">
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
}
