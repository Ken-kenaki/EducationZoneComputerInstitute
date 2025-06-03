export default function Contact(): JSX.Element {
  return (
    <form className="p-6 space-y-4 max-w-xl mx-auto">
      <h1 className="text-3xl font-semibold">Contact Us</h1>
      <input placeholder="Name" className="border p-2 w-full" />
      <input placeholder="Email" className="border p-2 w-full" />
      <input placeholder="Phone" className="border p-2 w-full" />
      <input placeholder="Course" className="border p-2 w-full" />
      <textarea placeholder="Message" className="border p-2 w-full h-32" />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
}
