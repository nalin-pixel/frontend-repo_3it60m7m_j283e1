export default function CTA() {
  return (
    <section id="get-started" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_400px_at_50%_0%,rgba(255,255,255,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
          Launch your product in days, not months
        </h2>
        <p className="mt-4 text-white/70">
          Ship a polished fintech experience with built‑in security and a stunning UI.
        </p>
        <form className="mt-8 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3">
          <input
            type="email"
            placeholder="Enter your work email"
            className="w-full rounded-xl bg-white/10 px-4 py-3 text-white placeholder:text-white/50 ring-1 ring-white/15 focus:outline-none focus:ring-white/30"
          />
          <button className="inline-flex justify-center rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 ring-1 ring-white/15 hover:from-blue-400 hover:to-indigo-400 transition">
            Request access
          </button>
        </form>
        <p className="mt-3 text-xs text-white/50">No credit card required</p>
      </div>
    </section>
  );
}
