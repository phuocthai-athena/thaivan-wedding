"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Send, MessageCircle, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { SAMPLE_WISHES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { WishFormData, Wish } from "@/lib/types";
import { formatDate } from "@/lib/utils";

export function Wishes() {
  const [wishes, setWishes] = useState<Wish[]>(SAMPLE_WISHES);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<WishFormData>();

  const onSubmit = async (data: WishFormData) => {
    setIsSubmitting(true);

    try {
      // TODO: Replace with actual API call
      console.log("Submitting wish:", data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Add new wish to local state (in real app, this would come from API response)
      const newWish: Wish = {
        id: Date.now().toString(),
        name: data.name,
        message: data.message,
        email: data.email,
        createdAt: new Date().toISOString(),
        approved: true, // In real app, this might be false initially
      };

      setWishes((prev) => [newWish, ...prev]);
      reset();

      // Show success message (you might want to use a toast library)
      alert("Cảm ơn bạn đã gửi lời chúc! ❤️");
    } catch (error) {
      console.error("Error submitting wish:", error);
      alert("Có lỗi xảy ra. Vui lòng thử lại!");
    } finally {
      setIsSubmitting(false);
    }
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="wishes"
      className="py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50"
    >
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
            Lời Chúc Chúng Mình Có
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Những lời chúc tốt đẹp từ bạn bè và người thân sẽ là món quà tinh
            thần quý giá nhất cho chúng mình
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Wish Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Gửi Lời Chúc
                </h3>
                <p className="text-gray-600 text-sm">
                  Hãy để lại những lời chúc tốt đẹp cho chúng mình nhé!
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <Input
                    {...register("name", {
                      required: "Vui lòng nhập tên của bạn",
                    })}
                    placeholder="Tên của bạn *"
                    className={errors.name ? "border-red-300" : ""}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <Input
                    {...register("email", {
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Email không hợp lệ",
                      },
                    })}
                    type="email"
                    placeholder="Email (không bắt buộc)"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <Textarea
                    {...register("message", {
                      required: "Vui lòng nhập lời chúc",
                      minLength: {
                        value: 10,
                        message: "Lời chúc phải có ít nhất 10 ký tự",
                      },
                    })}
                    placeholder="Viết lời chúc của bạn... *"
                    rows={4}
                    className={errors.message ? "border-red-300" : ""}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                  size="lg"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Đang gửi...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="w-4 h-4" />
                      <span>Gửi Lời Chúc</span>
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Wishes List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="space-y-6">
              {wishes.length === 0 ? (
                <motion.div
                  variants={itemVariants}
                  className="text-center py-12 bg-white rounded-2xl shadow-lg"
                >
                  <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">
                    Chưa có lời chúc nào. Hãy là người đầu tiên!
                  </p>
                </motion.div>
              ) : (
                wishes.map((wish) => (
                  <motion.div
                    key={wish.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                  >
                    {/* Wish Header */}
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800 text-lg">
                          {wish.name}
                        </h4>
                        <p className="text-gray-500 text-sm">
                          {formatDate(wish.createdAt)}
                        </p>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4 text-pink-500 fill-current" />
                        <Heart className="w-4 h-4 text-pink-400 fill-current" />
                        <Heart className="w-4 h-4 text-pink-300 fill-current" />
                      </div>
                    </div>

                    {/* Wish Content */}
                    <div className="pl-16">
                      <p className="text-gray-700 leading-relaxed">
                        {wish.message}
                      </p>
                    </div>

                    {/* Decorative Element */}
                    <div className="absolute top-4 right-4 opacity-5">
                      <MessageCircle className="w-8 h-8 text-pink-500" />
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Load More Button (if needed) */}
            {wishes.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center mt-8"
              >
                <Button variant="outline" size="lg">
                  Xem thêm lời chúc
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-8 text-white shadow-xl">
            <Heart className="w-12 h-12 mx-auto mb-4 fill-current" />
            <h3 className="text-2xl font-bold mb-4">Cảm ơn bạn rất nhiều!</h3>
            <p className="text-pink-100 max-w-2xl mx-auto">
              Mỗi lời chúc của bạn đều là một món quà tinh thần vô giá đối với
              chúng mình. Cảm ơn bạn đã dành thời gian và tình cảm để chia sẻ
              niềm vui này cùng chúng mình!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
