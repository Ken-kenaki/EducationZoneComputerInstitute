export default function Admission(): JSX.Element {
  return (
    <form className="p-6 space-y-4 max-w-xl mx-auto">
      <h1 className="text-3xl font-semibold">Admission / Registration Form</h1>
      <input placeholder="Full Name" className="border p-2 w-full" />
      <input placeholder="Email" className="border p-2 w-full" />
      <input placeholder="Phone Number" className="border p-2 w-full" />
      <input placeholder="Course Interested" className="border p-2 w-full" />
      <textarea placeholder="Message" className="border p-2 w-full h-32" />
      <button className="bg-green-600 text-white px-4 py-2 rounded">
        Register
      </button>
    </form>
  );
}
