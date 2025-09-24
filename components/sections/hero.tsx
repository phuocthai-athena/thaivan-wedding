"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Heart } from "lucide-react";
import { COUPLE_INFO } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-rose-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
                <span className="text-pink-500">{COUPLE_INFO.groom.name}</span>
                <span className="mx-4 text-rose-400">
                  <Heart className="inline w-8 h-8 sm:w-10 sm:h-10" />
                </span>
                <span className="text-pink-500">{COUPLE_INFO.bride.name}</span>
              </h1>
              <div className="text-2xl sm:text-3xl font-light text-gray-600 mb-2">
                We&apos;re Getting Married!
              </div>
              <div className="text-lg sm:text-xl text-gray-500">
                Chúng mình sắp thành vợ chồng!
              </div>
            </motion.div>

            {/* Wedding Date */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-md">
                <Calendar className="w-5 h-5 text-pink-500" />
                <span className="text-gray-700 font-medium">
                  {formatDate(COUPLE_INFO.weddingDate)}
                </span>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-8"
            >
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-md">
                <MapPin className="w-5 h-5 text-pink-500" />
                <span className="text-gray-700 font-medium">Hải Phòng</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-600 mb-8 max-w-md mx-auto lg:mx-0"
            >
              Cùng chúng mình chia sẻ niềm vui và khoảnh khắc đáng nhớ nhất
              trong cuộc đời. Sự có mặt của bạn sẽ làm cho ngày đặc biệt này trở
              nên ý nghĩa hơn!
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("#events")}
                className="px-8 py-3 text-base"
              >
                Xem Sự Kiện Cưới
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("#wishes")}
                className="px-8 py-3 text-base"
              >
                Gửi Lời Chúc
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white p-4">
              <div className="aspect-[4/5] bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl flex items-center justify-center">
                {/* Placeholder for couple photo */}
                <div className="text-center text-gray-400">
                  <Heart className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">Ảnh cặp đôi</p>
                  <p className="text-sm">Thái & Vân</p>
                </div>
              </div>
            </div>

            {/* Floating Hearts Animation */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    y: [-20, -100],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeOut",
                  }}
                  className="absolute"
                  style={{
                    left: `${20 + i * 15}%`,
                    bottom: "10%",
                  }}
                >
                  <Heart className="w-4 h-4 text-pink-400 fill-current" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-pink-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-pink-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
