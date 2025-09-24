"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { COUPLE_INFO, SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Couple Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white fill-current" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">
                  {COUPLE_INFO.groom.name} & {COUPLE_INFO.bride.name}
                </h3>
                <p className="text-gray-400">Wedding 2025</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Cảm ơn bạn đã ghé thăm trang web cưới của chúng mình. Sự có mặt và
              những lời chúc tốt đẹp của bạn sẽ làm cho ngày đặc biệt này trở
              nên ý nghĩa và hoàn hảo hơn.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <motion.a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-6 text-pink-400">Liên hệ</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-400">Chú rể</p>
                  <p className="text-white">+84 123 456 789</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-400">Cô dâu</p>
                  <p className="text-white">+84 987 654 321</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white">thaivan2025@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Wedding Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-6 text-pink-400">Đám cưới</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Heart className="w-4 h-4 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-400">Ngày cưới</p>
                  <p className="text-white">12/10/2025</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-gray-400 mt-1" />
                <div>
                  <p className="text-sm text-gray-400">Địa điểm</p>
                  <p className="text-white">Hải Phòng</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 text-sm"
            >
              © {currentYear} Thái & Vân Wedding. Made with{" "}
              <Heart className="inline w-4 h-4 text-pink-500 fill-current mx-1" />
              by <span className="text-pink-400">Next.js</span> +{" "}
              <span className="text-pink-400">Tailwind CSS</span> +{" "}
              <span className="text-pink-400">Framer Motion</span>
            </motion.p>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-pink-400 hover:text-pink-300 transition-colors"
            >
              <span className="text-sm">Về đầu trang</span>
              <div className="w-8 h-8 bg-pink-500 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors">
                <Heart className="w-4 h-4 text-white transform rotate-180" />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Final Thank You */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-8 pt-8 border-t border-gray-800"
        >
          <p className="text-gray-300 italic">
            &quot;Tình yêu không chỉ là nhìn vào mắt nhau, mà là cùng nhau nhìn
            về một hướng&quot;
          </p>
          <p className="text-pink-400 mt-2 font-medium">- Thái & Vân -</p>
        </motion.div>
      </div>
    </footer>
  );
}
