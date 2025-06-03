import Image from "next/image";

export default function About(): JSX.Element {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Founder & Director",
      bio: "With over 15 years in IT education, John founded Education Zone to bridge the digital divide.",
      image: "/sir.jpg",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
      {/* Hero Section */}
      <div
        className="rounded-xl p-8 text-white"
        style={{
          background: "linear-gradient(135deg, #001f99 0%, #003366 100%)",
          boxShadow: "0 4px 20px rgba(0, 31, 153, 0.3)",
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About Education Zone
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-xl">
              <span className="font-semibold">Established:</span> 2071 B.S.
              (2014 A.D)
            </p>
            <p className="text-xl">
              <span className="font-semibold">Location:</span> Lalbandi
              Municipality 7, Sarlahi
            </p>
            <p className="text-xl">
              <span className="font-semibold">Email:</span>{" "}
              educationzonelalbandi@gmail.com
            </p>
            <p className="text-xl">
              <span className="font-semibold">Contact:</span> 9844162726 /
              9823056087
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full h-64 relative rounded-lg overflow-hidden">
              <Image
                src="/edu.jpg"
                alt="Education Zone Campus"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mission/Vision Section */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* History Card */}
        <div
          className="p-6 rounded-lg border-l-4"
          style={{ borderLeftColor: "#004a00", backgroundColor: "#f0fff0" }}
        >
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#004a00" }}>
            Our History
          </h2>
          <p className="text-gray-700">
            Founded in 2014 to bridge the digital divide by providing
            affordable, high-quality computer education to the Lalbandi
            community. What began as a small training center has grown into a
            premier computer education institute in Sarlahi district.
          </p>
        </div>

        {/* Mission Card */}
        <div
          className="p-6 rounded-lg border-l-4"
          style={{ borderLeftColor: "#ff0000", backgroundColor: "#fff0f0" }}
        >
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#ff0000" }}>
            Our Mission
          </h2>
          <p className="text-gray-700">
            To equip students with practical technical skills and confidence to
            thrive in the digital world. We focus on hands-on learning,
            industry-relevant curriculum, and personal attention to each
            student's growth.
          </p>
        </div>

        {/* Vision Card */}
        <div
          className="p-6 rounded-lg border-l-4"
          style={{ borderLeftColor: "#001f99", backgroundColor: "#f0f5ff" }}
        >
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#001f99" }}>
            Our Vision
          </h2>
          <p className="text-gray-700">
            To become the leading computer education provider across Madhesh
            Province, empowering individuals and businesses through digital
            literacy and technological skills that drive regional development.
          </p>
        </div>
      </div>

      {/* CEO Section */}
      <div className="text-center py-8">
        <h2 className="text-3xl font-bold mb-2" style={{ color: "#003366" }}>
          Meet Our CEO/ Director
        </h2>
        <div
          className="w-24 h-1 mx-auto mb-8"
          style={{ backgroundColor: "#ff0000" }}
        ></div>

        <div className="flex justify-center">
          {" "}
          {/* Changed this line */}
          <div className="grid md:grid-cols-1 gap-8 mt-8 max-w-md">
            {" "}
            {/* Changed this line */}
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105"
                style={{ borderTop: "4px solid #001f99" }}
              >
                <div className="h-64 relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h3
                    className="text-xl font-bold"
                    style={{ color: "#001f99" }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-red-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-8 text-center">
        <h2 className="text-3xl font-bold mb-2" style={{ color: "#004a00" }}>
          Our Core Values
        </h2>
        <div
          className="w-24 h-1 mx-auto mb-8"
          style={{ backgroundColor: "#fffc00" }}
        ></div>

        <div className="grid md:grid-cols-4 gap-4">
          {[
            { title: "Excellence", color: "#ff0000" },
            { title: "Integrity", color: "#001f99" },
            { title: "Innovation", color: "#008000" },
            { title: "Community", color: "#003366" },
          ].map((value, index) => (
            <div
              key={index}
              className="p-4 rounded-lg text-white font-bold text-lg"
              style={{ backgroundColor: value.color }}
            >
              {value.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
