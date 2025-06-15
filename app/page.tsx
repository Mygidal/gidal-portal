"use client";

import { useEffect, useState, useCallback } from "react";
import Script from "next/script";
import Image from "next/image";

/* —–––––––––––––––––––––––––––––––––––––––––––
   TypeScript декларация – можеш да я изнесеш в /types/botpress.d.ts
––––––––––––––––––––––––––––––––––––––––––––– */
declare global {
  interface Window {
    botpressWebChat?: {
      sendEvent: (ev: { type: "show" | "hide" }) => void;
      init: (config: { [key: string]: unknown }) => void;
    };
  }
}

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);

  const toggleChat = useCallback(() => {
    if (
      typeof window !== "undefined" &&
      window.botpressWebChat &&
      typeof window.botpressWebChat.sendEvent === "function"
    ) {
      window.botpressWebChat.sendEvent({ type: chatOpen ? "hide" : "show" });
      setChatOpen(!chatOpen);
    }
  }, [chatOpen]);

  useEffect(() => {
    const btn = document.getElementById("gidbot-toggle");
    btn?.addEventListener("click", toggleChat);
    return () => btn?.removeEventListener("click", toggleChat);
  }, [toggleChat]);

  return (
    <>
      {/* ------ UI част на сайта ------ */}
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

      {/* ------ 🤖 Плаващ бутон ------ */}
      <button
        id="gidbot-toggle"
        aria-label="Отвори чат с GidBot"
        className="
          fixed bottom-6 right-6 z-50 flex items-center justify-center
          h-14 w-14 rounded-full bg-indigo-600 text-white text-2xl shadow-lg
          hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300
        "
      >
        🤖
      </button>

      {/* ------ Botpress WebChat скрипт ------ */}
      <Script
        src="https://cdn.botpress.cloud/webchat/v2.4/inject.js"
        strategy="afterInteractive"
        onLoad={() => {
          const initBotpress = () => {
            if (
              typeof window !== "undefined" &&
              window.botpressWebChat &&
              typeof window.botpressWebChat.init === "function"
            ) {
              window.botpressWebChat.init({
                botId: "gidbot-demo",
                clientId: "gidbot-demo",
                hostUrl: "https://cdn.botpress.cloud/webchat/v2.4",
                messagingUrl: "https://messaging.botpress.cloud",
                botName: "GidBot",
                composerPlaceholder: "Питай GidBot...",
                enableReset: true,
                hideWidget: true,
                disableAnimations: false,
              });
            } else {
              setTimeout(initBotpress, 300);
            }
          };

          initBotpress();
        }}
      />
    </>
  );
}
