"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Gift as GiftIcon,
  Copy,
  Check,
  CreditCard,
  Heart,
  QrCode,
} from "lucide-react";
import { GIFT_INFO } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";

export function Gift() {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [showQRModal, setShowQRModal] = useState<{
    type: "groom" | "bride";
  } | null>(null);

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(label);
      setTimeout(() => setCopiedText(null), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

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
    <section id="gift" className="py-20 bg-white">
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
            Mừng Cưới
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cảm ơn sự quan tâm và tình cảm của bạn dành cho chúng mình. Tấm lòng
            của bạn chính là món quà ý nghĩa nhất!
          </p>
        </motion.div>

        {/* Gift Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {/* Groom Account */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <GiftIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Mừng cưới đến chú rể
              </h3>
              <p className="text-blue-600 font-medium">
                {GIFT_INFO.groomAccount.accountName}
              </p>
            </div>

            {/* Bank Info */}
            <div className="space-y-4">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm mb-1">Ngân hàng</p>
                    <p className="font-bold text-gray-800">
                      {GIFT_INFO.groomAccount.bankName}
                    </p>
                  </div>
                  <CreditCard className="w-6 h-6 text-blue-500" />
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-gray-600 text-sm mb-1">Tên tài khoản</p>
                    <p className="font-bold text-gray-800">
                      {GIFT_INFO.groomAccount.accountName}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-gray-600 text-sm mb-1">Số tài khoản</p>
                    <p className="font-bold text-gray-800 font-mono text-lg">
                      {GIFT_INFO.groomAccount.accountNumber}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      copyToClipboard(
                        GIFT_INFO.groomAccount.accountNumber,
                        `groom-account`
                      )
                    }
                    className="ml-2"
                  >
                    {copiedText === "groom-account" ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </div>
            </div>

            {/* QR Code Button */}
            <div className="mt-6 text-center">
              <Button
                variant="outline"
                onClick={() => setShowQRModal({ type: "groom" })}
                className="w-full"
              >
                <QrCode className="w-4 h-4 mr-2" />
                Xem mã QR
              </Button>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 opacity-10">
              <Heart className="w-8 h-8 text-blue-500" />
            </div>
            <div className="absolute bottom-4 left-4 opacity-10">
              <GiftIcon className="w-6 h-6 text-blue-500" />
            </div>
          </motion.div>

          {/* Bride Account */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="relative bg-gradient-to-br from-pink-50 to-rose-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <GiftIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Mừng cưới đến cô dâu
              </h3>
              <p className="text-pink-600 font-medium">
                {GIFT_INFO.brideAccount.accountName}
              </p>
            </div>

            {/* Bank Info */}
            <div className="space-y-4">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm mb-1">Ngân hàng</p>
                    <p className="font-bold text-gray-800">
                      {GIFT_INFO.brideAccount.bankName}
                    </p>
                  </div>
                  <CreditCard className="w-6 h-6 text-pink-500" />
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-gray-600 text-sm mb-1">Tên tài khoản</p>
                    <p className="font-bold text-gray-800">
                      {GIFT_INFO.brideAccount.accountName}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-gray-600 text-sm mb-1">Số tài khoản</p>
                    <p className="font-bold text-gray-800 font-mono text-lg">
                      {GIFT_INFO.brideAccount.accountNumber}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      copyToClipboard(
                        GIFT_INFO.brideAccount.accountNumber,
                        `bride-account`
                      )
                    }
                    className="ml-2"
                  >
                    {copiedText === "bride-account" ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </div>
            </div>

            {/* QR Code Button */}
            <div className="mt-6 text-center">
              <Button
                variant="outline"
                onClick={() => setShowQRModal({ type: "bride" })}
                className="w-full"
              >
                <QrCode className="w-4 h-4 mr-2" />
                Xem mã QR
              </Button>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 left-4 opacity-10">
              <Heart className="w-8 h-8 text-pink-500" />
            </div>
            <div className="absolute bottom-4 right-4 opacity-10">
              <GiftIcon className="w-6 h-6 text-pink-500" />
            </div>
          </motion.div>
        </motion.div>

        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-3xl p-8 text-white shadow-xl max-w-4xl mx-auto">
            <Heart className="w-16 h-16 mx-auto mb-6 fill-current" />
            <h3 className="text-3xl font-bold mb-4">
              Cảm ơn tấm lòng của bạn!
            </h3>
            <p className="text-pink-100 text-lg leading-relaxed max-w-2xl mx-auto">
              Sự hiện diện của bạn trong ngày cưới chính là món quà quý giá
              nhất. Nếu bạn muốn gửi lời chúc bằng một cách khác, chúng mình vô
              cùng biết ơn và trân trọng tấm lòng của bạn.
            </p>
            <div className="mt-6 text-2xl font-light">
              &quot;Khi hai lương về một túi tiền&quot; ❤️
            </div>
          </div>
        </motion.div>

        {/* Copy Success Notification */}
        {copiedText && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
          >
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4" />
              <span>Đã sao chép số tài khoản!</span>
            </div>
          </motion.div>
        )}

        {/* QR Code Modal */}
        <Modal
          isOpen={showQRModal !== null}
          onClose={() => setShowQRModal(null)}
          title={`Mã QR - ${
            showQRModal?.type === "groom" ? "Chú rể" : "Cô dâu"
          }`}
          className="max-w-sm"
        >
          <div className="text-center">
            <div className="w-64 h-64 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <div className="text-center text-gray-400">
                <QrCode className="w-16 h-16 mx-auto mb-2" />
                <p>Mã QR chuyển khoản</p>
                <p className="text-sm">
                  {showQRModal?.type === "groom"
                    ? GIFT_INFO.groomAccount.accountName
                    : GIFT_INFO.brideAccount.accountName}
                </p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Quét mã QR để chuyển khoản nhanh chóng
            </p>
          </div>
        </Modal>
      </div>
    </section>
  );
}
