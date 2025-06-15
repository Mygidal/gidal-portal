"use client";
declare global {
  interface Window {
    botpressWebChat?: {
      sendEvent: (event: { type: "toggle" }) => void;
    };
  }
}

import { useEffect, useCallback } from "react";
import Script from "next/script";
import Image from "next/image";

export default function Home() {
  const toggleChat = useCallback(() => {
    if (
      typeof window !== "undefined" &&
      window.botpressWebChat &&
      typeof window.botpressWebChat.sendEvent === "function"
    ) {
      window.botpressWebChat.sendEvent({ type: "toggle" });
    }
  }, []);

  useEffect(() => {
    const btn = document.getElementById("gidbot-toggle");
    btn?.addEventListener("click", toggleChat);
    return () => btn?.removeEventListener("click", toggleChat);
  }, [toggleChat]);

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

      {/* 🤖 Плаващ бутон */}
      <button
        id="gidbot-toggle"
        aria-label="Отвори чат с GidBot"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center
                   h-14 w-14 rounded-full bg-indigo-600 text-white text-2xl shadow-lg
                   hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300"
      >
        🤖
      </button>

      {/* Botpress WebChat v3.0 + конфигурация */}
      <Script
        src="https://cdn.botpress.cloud/webchat/v3.0/inject.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://files.bpcontent.cloud/2025/06/03/07/20250603073406-PYEHA4W8.js"
        strategy="afterInteractive"
      />
    </>
  );
}
