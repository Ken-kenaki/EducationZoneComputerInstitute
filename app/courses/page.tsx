import Link from "next/link";

type Course = {
  name: string;
  duration: string;
  description: string;
  certification: boolean;
};

const courses: Course[] = [
  {
    name: "Basic Computer Training",
    duration: "3 Months",
    description:
      "Windows, MS Word, Excel, PowerPoint, Email, Internet, Printing",
    certification: true,
  },
  {
    name: "Advance Basic Course",
    duration: "6 Months",
    description: "Advance Office Package, Database, Photoshop",
    certification: true,
  },
  {
    name: "Diploma in Computer Operator",
    duration: "9 Months",
    description:
      "Advance Office, Database, Graphic Design, Accounting, Web Design",
    certification: true,
  },
  {
    name: "Diploma in Computer Application",
    duration: "18 Months",
    description:
      "Office, Database, Graphic Design, Accounting, Web Dev, Programming, Hardware",
    certification: true,
  },
  {
    name: "Special Package",
    duration: "Custom Duration",
    description: "Office, Accounting, Programming, Website",
    certification: true,
  },
];

export default function Courses(): JSX.Element {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Courses Offered
        </h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Comprehensive computer education programs designed to equip you with
          practical skills for the digital world.
        </p>
      </div>

      {/* Courses List */}
      <div className="grid md:grid-cols-2 gap-6">
        {courses.map((course, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-blue-600 hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-bold text-gray-800">
                  {course.name}
                </h2>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {course.duration}
                </span>
              </div>

              <p className="text-gray-600 mb-4">{course.description}</p>

              <div className="flex justify-between items-center">
                <span className="inline-flex items-center">
                  {course.certification ? (
                    <>
                      <svg
                        className="w-4 h-4 text-green-600 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-green-600 font-medium">
                        Certification Included
                      </span>
                    </>
                  ) : (
                    <span className="text-sm text-gray-500">
                      No Certification
                    </span>
                  )}
                </span>

                <Link
                  href="/admission"
                  className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Ready to start your journey?
        </h3>
        <Link
          href="/admission"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Apply for Admission
        </Link>
      </div>
    </div>
  );
}
