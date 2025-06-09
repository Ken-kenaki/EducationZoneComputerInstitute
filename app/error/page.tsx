"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ErrorPage() {
  const router = useRouter();
  const [face, setFace] = useState("😕");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const faces = ["😕", "😮", "😬", "🤔", "😅"];
    let i = 0;
    const interval = setInterval(() => {
      setFace(faces[i % faces.length]);
      i++;
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const triggerAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 flex flex-col items-center justify-center p-4 text-center">
      <div
        className={`text-9xl mb-6 ${isAnimating ? "animate-bounce" : ""}`}
        onClick={triggerAnimation}
      >
        {face}
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Oops! Something went <span className="text-red-500">terribly</span>{" "}
        wrong
      </h1>

      <p className="text-xl text-gray-600 mb-8 max-w-lg">
        Our hamsters stopped running on their wheels.
        <br />
        We &rsquo;ve sent a team with treats to motivate them!
      </p>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 w-full max-w-sm">
        <button
          onClick={() => router.refresh()}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105 shadow-lg"
        >
          <Link href="/admin/login">Try Again 🔄</Link>
        </button>

        <button
          onClick={() => router.push("/")}
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105 shadow-lg"
        >
          <Link href="/">Go Home 🏠</Link>
        </button>
      </div>

      <div className="mt-10 text-gray-500 text-sm">
        <p>Error Code: 404-HAMSTER-NOT-FOUND</p>
        <p className="mt-2">In the meantime, here &rsquo;s a joke:</p>
        <p className="mt-1 italic">
          Why don &rsquo;t programmers like nature?
          <br />
          It has too many bugs! 🐛
        </p>
      </div>
    </div>
  );
}
