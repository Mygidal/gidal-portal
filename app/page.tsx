"use client";

import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* UI част */}
      <main className="flex flex-col items-center pt-3 min-h-screen bg-white text-gray-800">
        <div className="logo-container animate-logo-in">
          <Image
            src="/logo.png"
            alt="GidAI Technologies"
            width={256}
            height={80}
            className="w-64 h-auto mb-1"
          />
          <div className="shine-overlay" />
          <div className="star" />
        </div>

        <p className="mt-1 text-lg font-light text-center px-4 fade-up">
          Unified&nbsp;AI platform for travel, delivery, apps and design.
          <br />
          Powered by <strong>GidAI&nbsp;Technologies</strong>
        </p>

        <div className="mt-5 mb-6 grid gap-4 grid-cols-1 sm:grid-cols-2 fade-up">
          <a href="https://gidal.app" className="button">
            GidAI
          </a>
          <a href="https://myappi.app" className="button">
            MyAppi
          </a>
          <a href="#" className="button">
            Deliveries
          </a>
          <a href="#" className="button">
            Design
          </a>
        </div>
      </main>
    </>
  );
}
