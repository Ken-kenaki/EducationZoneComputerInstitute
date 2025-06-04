"use client";

import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function Gallery() {
  const [images, setImages] = useState<{ name: string; url: string }[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const bucketName = "gallery";

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const supabase = createClient();
        const { data: files, error } = await supabase.storage
          .from(bucketName)
          .list();

        if (error) throw error;
        if (!files || files.length === 0) return;

        const imagesWithUrls = files.map((file) => ({
          name: file.name,
          url: supabase.storage.from(bucketName).getPublicUrl(file.name).data
            .publicUrl,
        }));

        setImages(imagesWithUrls);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchImages();
  }, []);

  const openModal = (imgUrl: string) => {
    setSelectedImage(imgUrl);
  };

  const closeModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImage(null);
  };

  return (
    <div className="p-6 relative">
      <h1 className="text-3xl font-semibold mb-4">Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img) => (
          <div
            key={img.name}
            className="relative h-48 rounded-md overflow-hidden cursor-pointer hover:opacity-90 transition-opacity shadow-md"
            onClick={() => openModal(img.url)}
          >
            <Image
              fill
              src={img.url}
              alt={img.name}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
            />
          </div>
        ))}
      </div>

      {/* Light Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/90 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh] bg-white rounded-lg shadow-xl border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-3 -right-3 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 transition-colors z-10"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>

            <div className="relative w-full h-full max-w-[80vw] max-h-[80vh] p-4">
              <Image
                src={selectedImage}
                alt="Enlarged view"
                width={400}
                height={200}
                className="object-contain rounded"
                quality={90}
                priority
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
