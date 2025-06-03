export default function WhyChooseUs() {
  const points = [
    "Experienced and certified instructors",
    "Industry-relevant curriculum",
    "Affordable fee structure",
    "Hands-on training and projects",
  ];

  return (
    <section className="p-10 bg-gray-50 rounded-xl shadow">
      <h2 className="text-3xl font-bold text-center mb-6">Why Choose Us?</h2>
      <ul className="grid md:grid-cols-2 gap-4 list-disc list-inside text-lg">
        {points.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </section>
  );
}
