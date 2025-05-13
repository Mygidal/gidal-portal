export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start pt-16 min-h-screen bg-white text-gray-800">
      <div className="logo-container animate-logo-in mt-6">
        <img
          src="/logo.png"
          alt="GidAI Technologies"
          className="w-64 h-auto"
        />
        <div className="shine-overlay" />
        <div className="star" />
      </div>

      <p className="mt-1 text-base font-light text-center px-4 fade-up">
        Unified AI platform for travel, delivery, apps and design.<br />
        Powered by <strong>GidAI Technologies</strong>
      </p>

      <div
        className="mt-5 mb-6 grid gap-4 grid-cols-1 sm:grid-cols-2 fade-up"
      >
        <a href="https://gidal.app" className="button">GidAI</a>
        <a href="https://myappi.app" className="button">MyAppi</a>
        <a href="#" className="button">Deliveries</a>
        <a href="#" className="button">Design</a>
      </div>
    </main>
  );
}
