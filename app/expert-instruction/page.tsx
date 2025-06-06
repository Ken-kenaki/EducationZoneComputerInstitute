import { FaChalkboardTeacher, FaUserTie, FaUsers } from "react-icons/fa";

export default function ExpertInstruction() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 text-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-12 text-center">
          Expert Instruction
        </h1>

        <div className="grid md:grid-cols-3 gap-10 mb-16">
          <div className="bg-blue-800 p-8 rounded-xl">
            <FaChalkboardTeacher className="text-5xl mb-6 text-blue-300" />
            <h2 className="text-2xl font-bold mb-4">Experienced Instructors</h2>
            <p className="text-lg">
              Our faculty members have 10+ years of teaching experience in their
              respective fields, ensuring you get the best guidance.
            </p>
          </div>

          <div className="bg-blue-800 p-8 rounded-xl">
            <FaUserTie className="text-5xl mb-6 text-blue-300" />
            <h2 className="text-2xl font-bold mb-4">Industry Professionals</h2>
            <p className="text-lg">
              Many of our instructors are currently working in the industry,
              bringing real-world knowledge to the classroom.
            </p>
          </div>

          <div className="bg-blue-800 p-8 rounded-xl">
            <FaUsers className="text-5xl mb-6 text-blue-300" />
            <h2 className="text-2xl font-bold mb-4">Personalized Attention</h2>
            <p className="text-lg">
              With small class sizes, each student receives individual attention
              to maximize their learning potential.
            </p>
          </div>
        </div>

        <div className="bg-white/10 p-8 text-blue-900 rounded-xl backdrop-blur-sm">
          <h2 className="text-3xl font-bold mb-6">Our Teaching Methodology</h2>
          <p className="text-lg mb-6">
            We combine theoretical knowledge with practical applications
            through:
          </p>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start">
              <span className="mr-3 text-2xl">•</span>
              <span>
                Interactive classroom sessions with live demonstrations
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-2xl">•</span>
              <span>Hands-on lab exercises and real-world projects</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-2xl">•</span>
              <span>Regular assessments and personalized feedback</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-2xl">•</span>
              <span>Industry visits and guest lectures from experts</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
