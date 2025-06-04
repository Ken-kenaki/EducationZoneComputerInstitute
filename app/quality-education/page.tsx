import { FaBook, FaLaptopCode, FaMoneyBillWave } from "react-icons/fa";

export default function QualityEducation() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-red-900 to-red-800 text-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Quality Education
        </h1>

        <div className="grid md:grid-cols-3 gap-10 mb-16">
          <div className="bg-red-800 p-8 rounded-xl">
            <FaBook className="text-5xl mb-6 text-red-300" />
            <h2 className="text-2xl font-bold mb-4">Updated Curriculum</h2>
            <p className="text-lg">
              Our courses are regularly updated to match current industry
              standards and technological advancements.
            </p>
          </div>

          <div className="bg-red-800 p-8 rounded-xl">
            <FaLaptopCode className="text-5xl mb-6 text-red-300" />
            <h2 className="text-2xl font-bold mb-4">Practical Training</h2>
            <p className="text-lg">
              70% of our course content is practical, ensuring you gain hands-on
              experience with real tools and technologies.
            </p>
          </div>

          <div className="bg-red-800 p-8 rounded-xl">
            <FaMoneyBillWave className="text-5xl mb-6 text-red-300" />
            <h2 className="text-2xl font-bold mb-4">Affordable Pricing</h2>
            <p className="text-lg">
              We offer high-quality education at reasonable prices with flexible
              payment options and scholarships.
            </p>
          </div>
        </div>

        <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
          <h2 className="text-3xl font-bold mb-6">Our Educational Approach</h2>
          <p className="text-lg mb-6">
            We're committed to providing education that prepares you for the
            real world:
          </p>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start">
              <span className="mr-3 text-2xl">•</span>
              <span>Project-based learning with real client work</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-2xl">•</span>
              <span>Industry-standard tools and software</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-2xl">•</span>
              <span>Career counseling and placement support</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-2xl">•</span>
              <span>Alumni network and mentorship programs</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
