import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GidAI Technologies",
  description: "Unified AI platform for travel, delivery, apps and design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://cdn.botpress.cloud/webchat/v2.4/inject.js"
          defer
        ></script>
        <script
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
