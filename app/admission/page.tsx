// Admission.tsx
"use client";

import { JSX, useState } from "react";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

export default function Admission(): JSX.Element {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone_number: "",
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

    const { error } = await supabase.from("admissions").insert([form]);

    if (error) {
      alert("Error submitting registration");
      console.error(error);
    } else {
      alert("Registration successful!");
      setForm({
        full_name: "",
        email: "",
        phone_number: "",
        course: "",
        message: "",
      });
    }
  };

  return (
    <form
      className="p-6 space-y-4 max-w-xl mt-40 mx-auto"
      onSubmit={handleSubmit}
    >
      <h1 className="text-3xl font-semibold">Admission / Registration Form</h1>
      <input
        name="full_name"
        value={form.full_name}
        onChange={handleChange}
        placeholder="Full Name"
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
        name="phone_number"
        value={form.phone_number}
        onChange={handleChange}
        placeholder="Phone Number"
        className="border p-2 w-full"
      />
      <input
        name="course"
        value={form.course}
        onChange={handleChange}
        placeholder="Course Interested"
        className="border p-2 w-full"
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Message"
        className="border p-2 w-full h-32"
      />
      <button className="bg-green-600 text-white px-4 py-2 rounded">
        Register
      </button>
    </form>
  );
}
