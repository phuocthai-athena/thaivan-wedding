"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { SAMPLE_PHOTOS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: "Tất cả" },
    { id: "couple", label: "Cặp đôi" },
    { id: "engagement", label: "Đính hôn" },
    { id: "prewedding", label: "Chụp cưới" },
    { id: "family", label: "Gia đình" },
  ];

  const filteredPhotos =
    filter === "all"
      ? SAMPLE_PHOTOS
      : SAMPLE_PHOTOS.filter((photo) => photo.category === filter);

  const openLightbox = (index: number) => {
    setSelectedPhoto(index);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const navigatePhoto = (direction: "prev" | "next") => {
    if (selectedPhoto === null) return;

    const currentIndex = filteredPhotos.findIndex(
      (_, i) => i === selectedPhoto
    );
    let newIndex;

    if (direction === "prev") {
      newIndex =
        currentIndex > 0 ? currentIndex - 1 : filteredPhotos.length - 1;
    } else {
      newIndex =
        currentIndex < filteredPhotos.length - 1 ? currentIndex + 1 : 0;
    }

    setSelectedPhoto(newIndex);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Ảnh Chúng Mình Chụp
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Những khoảnh khắc đẹp nhất của chúng mình được lưu giữ qua từng bức
            ảnh
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              onClick={() => setFilter(category.id)}
              className="rounded-full"
            >
              {category.label}
            </Button>
          ))}
        </motion.div>

        {/* Photo Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          key={filter} // Re-animate when filter changes
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative aspect-square cursor-pointer group overflow-hidden rounded-lg shadow-md"
              onClick={() => openLightbox(index)}
            >
              {/* Photo */}
              <Image
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
                width={1000}
                height={1000}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <Heart className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-0 group-hover:scale-100" />
              </div>

              {/* Category Badge */}
              <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
                  {categories.find((cat) => cat.id === photo.category)?.label ||
                    "Khác"}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredPhotos.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">Không có ảnh nào trong danh mục này</p>
          </motion.div>
        )}

        {/* Lightbox */}
        <AnimatePresence>
          {selectedPhoto !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigatePhoto("prev");
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-8 h-8 text-white" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigatePhoto("next");
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-8 h-8 text-white" />
              </button>

              {/* Photo */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-4xl max-h-[90vh] mx-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={filteredPhotos[selectedPhoto]?.src}
                  alt={filteredPhotos[selectedPhoto]?.alt}
                  className="w-full h-full object-contain rounded-lg"
                  width={1000}
                  height={1000}
                />

                {/* Caption */}
                {filteredPhotos[selectedPhoto]?.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 rounded-b-lg">
                    <p className="text-white text-center">
                      {filteredPhotos[selectedPhoto]?.caption}
                    </p>
                  </div>
                )}

                {/* Photo Counter */}
                <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {selectedPhoto + 1} / {filteredPhotos.length}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
