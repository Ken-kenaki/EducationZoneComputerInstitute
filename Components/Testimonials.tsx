"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { createClient } from "@/utils/supabase/client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { StarIcon } from "@heroicons/react/20/solid";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
};

const InputField = ({
  label,
  name,
  value,
  onChange,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}) => (
  <div className="flex flex-col gap-1">
    <label htmlFor={name} className="text-gray-800 font-medium">
      {label}
    </label>
    {name === "content" ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        className="p-2 rounded bg-gray-100 text-gray-800 border border-gray-300"
        rows={4}
        required
      />
    ) : (
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="p-2 rounded bg-gray-100 text-gray-800 border border-gray-300"
        required
      />
    )}
  </div>
);

const TestimonialsSection = () => {
  const supabase = createClient();

  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    content: "",
    rating: 5,
  });

  useEffect(() => {
    const fetchTestimonials = async () => {
      const { data, error } = await supabase
        .from("testimonials")
        .select("*")
        .order("id", { ascending: false });
      if (!error && data) setTestimonials(data as Testimonial[]);
    };

    fetchTestimonials();

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    setIsOnline(navigator.onLine);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [supabase]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "rating" ? Number(value) : value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const { data, error } = await supabase
        .from("testimonials")
        .insert([formData])
        .select();

      if (error) {
        alert("Something went wrong. Try again.");
        console.error(error);
        return;
      }

      if (data && data.length > 0) {
        setTestimonials([data[0] as Testimonial, ...testimonials]);
        setShowModal(false);
        setFormData({ name: "", role: "", content: "", rating: 5 });
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white text-gray-800 py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">What Others Are Saying</h2>
        <p className="text-gray-600 mb-8">
          Real feedback from our awesome community.
        </p>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition"
        >
          Add Your Testimonial
        </button>
      </div>

      {showModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Your Testimonial
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <InputField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <InputField
                label="Role"
                name="role"
                value={formData.role}
                onChange={handleChange}
              />
              <InputField
                label="Content"
                name="content"
                value={formData.content}
                onChange={handleChange}
              />
              <div className="flex flex-col gap-1">
                <label htmlFor="rating" className="text-gray-800 font-medium">
                  Rating
                </label>
                <select
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  className="p-2 rounded bg-gray-100 text-gray-800 border border-gray-300"
                  required
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <option key={star} value={star}>
                      {star} Star{star > 1 ? "s" : ""}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                disabled={!isOnline || submitting}
                className={`px-4 py-2 mt-4 rounded text-white ${
                  isOnline && !submitting
                    ? "bg-blue-500 hover:bg-blue-600"
                    : "bg-gray-500 cursor-not-allowed"
                }`}
              >
                {submitting
                  ? "Submitting..."
                  : isOnline
                  ? "Submit Testimonial"
                  : "Offline - Cannot Submit"}
              </button>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="mt-2 text-sm text-gray-600 hover:underline"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

      {testimonials.length === 0 ? (
        <div className="text-center mt-8 text-gray-600 italic">
          No testimonials yet. Be the first to share!
        </div>
      ) : (
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mt-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide
              key={testimonial.id}
              className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200"
            >
              <p className="text-gray-700 italic mb-4">{testimonial.content}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default TestimonialsSection;
