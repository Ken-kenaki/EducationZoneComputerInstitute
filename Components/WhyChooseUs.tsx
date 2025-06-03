export default function WhyChooseUs() {
  const cards = [
    {
      title: "Expert Instruction",
      points: [
        "Experienced and certified instructors",
        "Personalized attention",
        "Industry-experienced faculty",
      ],
      bgColor: "bg-[#001f99]", // Deep Blue
      textColor: "text-white",
    },
    {
      title: "Quality Education",
      points: [
        "Industry-relevant curriculum",
        "Hands-on training and projects",
        "Affordable fee structure",
      ],
      bgColor: "bg-[#ff0000]", // Bright Red
      textColor: "text-white",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <h2
        className="text-3xl font-bold text-center mb-12"
        style={{ color: "#003366" }}
      >
        Why Choose Us?
      </h2>
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`${card.bgColor} ${card.textColor} p-8 rounded-xl shadow-lg transform transition-all hover:scale-[1.02] h-full`}
          >
            <h3 className="text-2xl font-bold mb-6">{card.title}</h3>
            <ul className="space-y-4 text-lg">
              {card.points.map((point, pointIdx) => (
                <li key={pointIdx} className="flex items-start">
                  <span className="mr-3 text-xl">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
