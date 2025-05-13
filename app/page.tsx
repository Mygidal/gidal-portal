// app/page.tsx

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800">
      <img
        src="/logo.png"
        alt="GidAI Technologies"
        className="w-64 h-auto animate-fade-in"
      />
      <p className="mt-6 text-lg font-light text-center px-4">
        Unified AI platform for travel, delivery, apps and design.<br />
        Powered by <strong>GidAI Technologies</strong>
      </p>

      <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2">
        <a href="https://gidal.app" className="button">GidAI</a>
        <a href="https://myappi.app" className="button">MyAppi</a>
        <a href="#" className="button">Deliveries</a>
        <a href="#" className="button">Design</a>
      </div>
    </main>
  )
}
