"use client";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-start pt-3 min-h-screen bg-white text-gray-800">
        {/* ... съдържанието */}
      </main>

      {/* Botpress Webchat - стабилно Next.js вграждане */}
      <Script
        src="https://cdn.botpress.cloud/webchat/v2.4/inject.js"
        strategy="afterInteractive"
      />
      <Script
        id="botpress-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.botpressWebChat.init({
              composerPlaceholder: "Напиши въпрос към GidBot...",
              botId: "gidbot-demo",
              clientId: "gidbot-demo",
              hostUrl: "https://cdn.botpress.cloud/webchat/v2.4",
              messagingUrl: "https://messaging.botpress.cloud",
              botName: "GidBot",
              enableReset: true
            });
          `,
        }}
      />
    </>
  );
}
