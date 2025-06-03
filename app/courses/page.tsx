type Course = {
  name: string;
  duration: string;
  description: string;
  certification: boolean;
};

const courses: Course[] = [
  {
    name: "Basic Computer Training",
    duration: "3 Month",
    description:
      "Windows, MS Word, Excel, PowerPoint, Email, Internet, Printing",
    certification: true,
  },
  {
    name: "Advance Basic Course",
    duration: "6 Month",
    description: "Advance Office Package, Database, Photoshop",
    certification: true,
  },
  {
    name: "Diploma in Computer Operator",
    duration: "9 Month",
    description:
      "Advance Office, Database, Graphic Design, Accounting, Web Design",
    certification: true,
  },
  {
    name: "Diploma in Computer Application",
    duration: "18 Month",
    description:
      "Office, Database, Graphic Design, Accounting, Web Dev, Programming, Hardware",
    certification: true,
  },
  {
    name: "Special Package",
    duration: "N/A",
    description: "Office, Accounting, Programming, Website",
    certification: true,
  },
];

export default function Courses(): JSX.Element {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-4">Courses Offered</h1>
      <ul className="space-y-4">
        {courses.map((course, i) => (
          <li key={i} className="p-4 bg-gray-100 rounded-xl shadow">
            <h2 className="text-xl font-semibold">{course.name}</h2>
            <p className="text-sm">Duration: {course.duration}</p>
            <p>{course.description}</p>
            <p>Certification: {course.certification ? "Yes" : "No"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
