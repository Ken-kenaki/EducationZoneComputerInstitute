// Contact.tsx
"use client";

import { JSX, useState } from "react";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

export default function Contact(): JSX.Element {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.from("contacts").insert([form]);

    if (error) {
      alert("Error submitting form");
      console.error(error);
    } else {
      alert("Form submitted successfully!");
      setForm({ name: "", email: "", phone: "", course: "", message: "" });
    }
  };

  return (
    <form
      className="p-6 space-y-4 mt-40 max-w-xl mx-auto"
      onSubmit={handleSubmit}
    >
      <h1 className="text-3xl font-semibold">Contact Us</h1>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
        className="border p-2 w-full"
      />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        className="border p-2 w-full"
      />
      <input
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="Phone"
        className="border p-2 w-full"
      />
      <input
        name="course"
        value={form.course}
        onChange={handleChange}
        placeholder="Course"
        className="border p-2 w-full"
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Message"
        className="border p-2 w-full h-32"
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
}
