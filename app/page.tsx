"use client";

import React from "react";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Couple } from "@/components/sections/couple";
import { Events } from "@/components/sections/events";
import { Gallery } from "@/components/sections/gallery";
import { Wishes } from "@/components/sections/wishes";
import { Gift } from "@/components/sections/gift";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Fixed Header */}
      <Header />

      {/* Main Sections */}
      <Hero />
      <Couple />
      <Events />
      <Gallery />
      <Wishes />
      <Gift />

      {/* Footer */}
      <Footer />
    </main>
  );
}
