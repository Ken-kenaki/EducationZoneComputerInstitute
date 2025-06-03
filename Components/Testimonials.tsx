"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { supabase } from "@/lib/supabase/client";

type Testimonial = {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
};

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    content: "",
    rating: 5,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const { data, error } = await supabase
          .from("testimonials")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;
        setTestimonials(data || []);
      } catch (error) {
        console.error("Error loading testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase
        .from("testimonials")
        .insert([
          {
            name: formData.name,
            role: formData.role,
            content: formData.content,
            rating: formData.rating,
            created_at: new Date().toISOString(),
          },
        ])
        .select();

      if (error) throw error;

      setTestimonials([data[0], ...testimonials]);
      setIsModalOpen(false);
      setFormData({
        name: "",
        role: "",
        content: "",
        rating: 5,
      });
    } catch (err) {
      console.error("Submission error:", err);
      alert("Failed to submit testimonial. Please try again.");
    }
  };

  if (loading) return <div className="text-center p-8">Loading...</div>;

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            What Our Students Say
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
        </div>

        {/* Testimonials Slider */}
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet bg-gray-300",
            bulletActiveClass: "swiper-pagination-bullet-active bg-blue-600",
          }}
          breakpoints={{ 1024: { slidesPerView: 2 } }}
          className="!pb-12"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white p-8 rounded-xl shadow-md h-full border-t-4 border-blue-600">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} filled={i < item.rating} />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">"{item.content}"</p>
                <div className="flex items-center">
                  <div className="bg-blue-100 text-blue-800 rounded-full h-12 w-12 flex items-center justify-center mr-4 font-bold">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Add Testimonial Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Share Your Experience
          </button>
        </div>
      </div>

      {/* Testimonial Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">
                Add Your Testimonial
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <InputField
                label="Your Name"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />

              <InputField
                label="Your Role (e.g., Student, Parent)"
                name="role"
                value={formData.role}
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
              />

              <div>
                <label className="block text-gray-700 mb-2">Your Rating</label>
                <select
                  value={formData.rating}
                  onChange={(e) =>
                    setFormData({ ...formData, rating: +e.target.value })
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {[5, 4, 3, 2, 1].map((num) => (
                    <option key={num} value={num}>
                      {num} Star{num !== 1 ? "s" : ""}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Your Experience
                </label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={(e) =>
                    setFormData({ ...formData, content: e.target.value })
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={5}
                  required
                  placeholder="Share your learning experience..."
                />
              </div>

              <button
                type="submit"
                disabled={!isOnline}
                className={`w-full py-3 rounded-lg font-medium ${
                  !isOnline
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
              >
                {!isOnline ? "Offline - Cannot Submit" : "Submit Testimonial"}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      className={`w-6 h-6 ${filled ? "text-yellow-500" : "text-gray-300"}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function InputField({ label, ...props }: any) {
  return (
    <div>
      <label className="block text-gray-700 mb-2">{label}</label>
      <input
        {...props}
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        required
      />
    </div>
  );
}
