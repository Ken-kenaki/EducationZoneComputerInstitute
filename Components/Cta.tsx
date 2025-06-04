import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="p-10 text-center bg-blue-600 text-white rounded-xl shadow">
      <h2 className="text-3xl font-bold mb-4">Ready to start your journey?</h2>
      <p className="mb-6 text-lg">
        Join hundreds of students building their future with us.
      </p>
      <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100">
        <Link href="/admission">Enroll Now</Link>
      </button>
    </section>
  );
}
