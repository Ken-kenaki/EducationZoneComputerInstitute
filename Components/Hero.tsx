import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-180 flex justify-center items-center flex-col shadow-lg overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="Education Zone background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-indigo-700/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
          Education Zone Computer Institute
        </h1>
        <p className="text-lg sm:text-xl mb-6 text-white">
          Empowering the digital generation
        </p>
        <button className="bg-white text-blue-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300">
          Explore Courses
        </button>
      </div>
    </section>
  );
}
