"use client";

import Link from "next/link";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function HomeCoursesSection() {
  const featuredCourses = [
    {
      name: "Basic Computer Training",
      duration: "3 Months",
    },
    {
      name: "Diploma in Computer Operator",
      duration: "9 Months",
    },
    {
      name: "Diploma in Computer Application",
      duration: "18 Months",
    },
  ];

  useEffect(() => {
    const lines = gsap.utils.toArray(".course-line") as Element[];

    lines.forEach((line) => {
      gsap.fromTo(
        line,
        { width: "0rem" },
        {
          width: "3rem",
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: line,
            start: "top 100%",
            end: "bottom 50%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Our Courses</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-2"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {featuredCourses.map((course, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {course.name}
              </h3>
              <p className="text-gray-600 mb-4">Duration: {course.duration}</p>
              <div
                className="h-1 w-12 bg-blue-500 mb-4 course-line"
                style={{ width: "0rem" }} // override Tailwind to start at 0
              ></div>
              <p className="text-gray-600">
                Comprehensive training with certification upon completion.
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/courses"
            className="inline-block px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
}
