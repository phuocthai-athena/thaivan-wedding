"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Download, ExternalLink } from "lucide-react";
import { WEDDING_EVENTS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import {
  formatDate,
  formatTime,
  generateICalEvent,
  downloadICalFile,
} from "@/lib/utils";

export function Events() {
  const handleDownloadIcal = (event: (typeof WEDDING_EVENTS)[0]) => {
    const icalContent = generateICalEvent({
      title: event.title,
      start: `${event.date}T${event.time}:00`,
      end: `${event.date}T${event.time}:00`, // TODO: Add end time to events
      location: event.address,
      description: event.description,
    });
    downloadICalFile(icalContent, `${event.id}-thaivan-wedding`);
  };

  const handleViewMap = (event: (typeof WEDDING_EVENTS)[0]) => {
    if (event.lat && event.lng) {
      const mapUrl = `https://www.google.com/maps/search/?api=1&query=${event.lat},${event.lng}`;
      window.open(mapUrl, "_blank");
    } else {
      const searchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        event.address
      )}`;
      window.open(searchUrl, "_blank");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="events"
      className="py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50"
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
            Sự Kiện Cưới
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cùng chúng mình tham gia những khoảnh khắc đáng nhớ trong ngày trọng
            đại
          </p>
        </motion.div>

        {/* Events Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {WEDDING_EVENTS.map((event, index) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Event Header */}
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                <div className="flex items-center space-x-2 text-pink-100">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{formatDate(event.date)}</span>
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6">
                {/* Time */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-pink-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Thời gian</p>
                    <p className="text-gray-600">{formatTime(event.time)}</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-3 mb-6">
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                    <MapPin className="w-5 h-5 text-pink-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800 mb-1">
                      {event.location}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {event.address}
                    </p>
                  </div>
                </div>

                {/* Description */}
                {event.description && (
                  <div className="mb-6">
                    <p className="text-gray-600 text-sm italic">
                      {event.description}
                    </p>
                  </div>
                )}

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDownloadIcal(event)}
                    className="flex items-center justify-center space-x-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>Thêm vào lịch</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleViewMap(event)}
                    className="flex items-center justify-center space-x-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Xem bản đồ</span>
                  </Button>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 opacity-10">
                <div className="w-16 h-16 border-4 border-white rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Lịch trình ngày cưới
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-400 to-rose-400"></div>

              {/* Timeline Events */}
              <div className="space-y-12">
                {WEDDING_EVENTS.sort((a, b) =>
                  a.time.localeCompare(b.time)
                ).map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`flex items-center ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    {/* Content */}
                    <div
                      className={`w-5/12 ${
                        index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                      }`}
                    >
                      <div className="bg-white rounded-lg p-4 shadow-md">
                        <h4 className="font-bold text-gray-800">
                          {event.title}
                        </h4>
                        <p className="text-pink-600 font-medium">
                          {event.time}
                        </p>
                        <p className="text-gray-600 text-sm mt-1">
                          {event.location}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="w-2/12 flex justify-center">
                      <div className="w-4 h-4 bg-pink-500 rounded-full border-4 border-white shadow-md"></div>
                    </div>

                    {/* Spacer */}
                    <div className="w-5/12"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
