import Link from "next/link";
import React from "react";

export default function ExcellencePage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">
        Our Commitment to Excellence
      </h1>
      <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
      <p className="text-lg text-gray-700 mb-6">
        At Education Zone, excellence isn &rsquo;t just a goal — it &rsquo;s a
        standard we live by. We believe that true educational excellence is
        measured not just by academic achievement, but by the impact we create
        in the lives of our students and community.
      </p>
      <p className="text-gray-700 mb-4">
        Our programs are designed with a strong emphasis on practical learning,
        industry relevance, and personal growth. We continuously update our
        curriculum to meet evolving technological demands and ensure our
        students are equipped with skills that matter.
      </p>
      <p className="text-gray-700 mb-4">
        We pride ourselves on a team of passionate educators, modern facilities,
        and a learning environment that inspires curiosity and innovation. From
        the first day of class to graduation and beyond, our commitment to
        quality, mentorship, and support never wavers.
      </p>
      <p className="text-gray-700 mb-6">
        Excellence means more than just success in the classroom — it means
        preparing every student to thrive in a digital world, make meaningful
        contributions, and lead with confidence.
      </p>
      <div className="text-center">
        <Link href="/admission" className="text-blue-700 font-semibold">
          Join us in building a future shaped by skill, passion, and purpose.
        </Link>
      </div>
    </section>
  );
}
