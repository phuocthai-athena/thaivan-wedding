"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, User } from "lucide-react";
import { COUPLE_INFO } from "@/lib/constants";

export function Couple() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="couple" className="py-20 bg-white">
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
            Cặp Đôi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tình yêu không chỉ là nhìn vào mắt nhau, mà là cùng nhau nhìn về một
            hướng.
          </p>
        </motion.div>

        {/* Couple Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Groom Card */}
          <motion.div variants={itemVariants} className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Badge */}
              <div className="absolute -top-4 left-8">
                <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
                  Chú Rể
                </div>
              </div>

              {/* Photo */}
              <div className="flex justify-center mb-6 mt-4">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center shadow-md">
                  <User className="w-16 h-16 text-blue-400" />
                </div>
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                  {COUPLE_INFO.groom.fullName}
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <span className="font-medium">Con ông:</span>{" "}
                    {COUPLE_INFO.groom.fatherName}
                  </p>
                  <p>
                    <span className="font-medium">Con bà:</span>{" "}
                    {COUPLE_INFO.groom.motherName}
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 opacity-10">
                <Heart className="w-8 h-8 text-blue-500" />
              </div>
              <div className="absolute bottom-4 left-4 opacity-10">
                <Heart className="w-6 h-6 text-blue-500" />
              </div>
            </div>
          </motion.div>

          {/* Heart Separator */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:z-10"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center shadow-lg">
              <Heart className="w-8 h-8 text-white fill-current" />
            </div>
          </motion.div>

          {/* Bride Card */}
          <motion.div variants={itemVariants} className="relative">
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Badge */}
              <div className="absolute -top-4 right-8">
                <div className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
                  Cô Dâu
                </div>
              </div>

              {/* Photo */}
              <div className="flex justify-center mb-6 mt-4">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center shadow-md">
                  <User className="w-16 h-16 text-pink-400" />
                </div>
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                  {COUPLE_INFO.bride.fullName}
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <span className="font-medium">Con ông:</span>{" "}
                    {COUPLE_INFO.bride.fatherName}
                  </p>
                  <p>
                    <span className="font-medium">Con bà:</span>{" "}
                    {COUPLE_INFO.bride.motherName}
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 opacity-10">
                <Heart className="w-8 h-8 text-pink-500" />
              </div>
              <div className="absolute bottom-4 right-4 opacity-10">
                <Heart className="w-6 h-6 text-pink-500" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Wedding Date Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-gradient-to-r from-pink-400 to-rose-400 rounded-full px-8 py-4 shadow-lg">
            <p className="text-white text-lg font-medium">
              Ngày cưới của chúng mình
            </p>
            <p className="text-white text-3xl font-bold mt-2">12.10.2025</p>
          </div>
        </motion.div>

        {/* Love Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center mt-16"
        >
          <blockquote className="text-2xl sm:text-3xl font-light text-gray-600 italic max-w-3xl mx-auto">
            &quot;Tình yêu đích thực không bao giờ kết thúc. Câu chuyện tình yêu
            có thể có kết thúc, nhưng tình yêu thì không.&quot;
          </blockquote>
          <p className="text-gray-500 mt-4">- Thái & Vân -</p>
        </motion.div>
      </div>
    </section>
  );
}
