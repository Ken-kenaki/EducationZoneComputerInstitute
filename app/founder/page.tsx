"use client";

import Image from "next/image";
import { JSX } from "react";

export default function Founder(): JSX.Element {
  const founder = {
    name: "Uddhav Thapa",
    role: "Founder & Director",
    bio: `With over 15 years in the education sector, Uddhav Thapa is the visionary
    behind Education Zone. His passion to bridge the digital divide and empower
    the Lalbandi community with quality computer education led him to establish
    the institute in 2014. Uddhav believes in practical, hands-on learning and
    personalized attention to nurture talent and foster growth.

    Throughout his career, he has been committed to bringing affordable and
    industry-relevant education to underserved communities. Under his
    leadership, Education Zone has grown from a small training center to a
    leading computer education provider in the Madhesh Province.

    Beyond his work with Education Zone, Uddhav actively participates in local
    development initiatives, advocating for digital literacy as a tool for
    social and economic empowerment. His vision is to create a skilled,
    confident, and tech-savvy generation that can thrive in the digital age.`,
    image: "/sir.jpg",
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-12">
      <h1
        className="text-5xl font-bold mb-12 text-center"
        style={{ color: "#001f99" }}
      >
        Meet Our Founder
      </h1>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        <div className="relative w-64 h-80 rounded-lg overflow-hidden shadow-lg flex-shrink-0">
          <Image
            src={founder.image}
            alt={founder.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold" style={{ color: "#001f99" }}>
            {founder.name}
          </h2>
          <p className="text-red-600 font-semibold text-xl">{founder.role}</p>

          <p className="text-gray-700 whitespace-pre-line">{founder.bio}</p>
        </div>
      </div>

      {/* Optional: Add a "Back to About" link */}
      <div className="text-center mt-12">
        <a
          href="/about"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition"
        >
          &larr; Back to About
        </a>
      </div>
    </div>
  );
}
