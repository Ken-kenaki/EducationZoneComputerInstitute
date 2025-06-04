import Image from "next/image";
import Link from "next/link";

export function HomeAboutSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">
            About Education Zone
          </h2>
          <div className="w-20 h-1 bg-blue-600"></div>
          <p className="text-gray-600">
            Established in 2071 B.S. (2014 A.D), Education Zone has been
            bridging the digital divide by providing affordable, high-quality
            computer education to the Lalbandi community in Sarlahi.
          </p>
          <p className="text-gray-600">
            Our mission is to equip students with practical technical skills and
            confidence to thrive in the digital world through hands-on learning
            and industry-relevant curriculum.
          </p>
          <Link
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            href="/about"
          >
            Learn More About Us
          </Link>
        </div>
        <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/edu.jpg"
            alt="Education Zone Campus"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
