// app/page.tsx

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800">
      <div className="logo-container animate-fade-in">
        <img
          src="/logo.png"
          alt="GidAI Technologies"
          className="w-64 h-auto"
          style={{ animationDelay: "0.25s" }}
        />
        <div className="shine-overlay" />
      </div>

      <p className="mt-6 text-lg font-light text-center px-4">
        Unified AI platform for travel, delivery, apps and design.<br />
        Powered by <strong>GidAI Technologies</strong>
      </p>

      <div
        className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 animate-fade-in"
        style={{ animationDelay: "2s" }}
      >
        <a href="https://gidal.app" className="button">GidAI</a>
        <a href="https://myappi.app" className="button">MyAppi</a>
        <a href="#" className="button">Deliveries</a>
        <a href="#" className="button">Design</a>
      </div>
    </main>
  );
}
