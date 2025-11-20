import { Shield, Zap, Globe, LineChart, Settings, Wallet } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Bank‑grade security",
    desc: "End‑to‑end encryption, 2FA, and continuous monitoring keep your business safe.",
  },
  {
    icon: Zap,
    title: "Instant onboarding",
    desc: "Get set up in minutes with guided flows and smart defaults.",
  },
  {
    icon: Wallet,
    title: "Payments & cards",
    desc: "Accept global payments and issue virtual cards with a few clicks.",
  },
  {
    icon: LineChart,
    title: "Real‑time analytics",
    desc: "Monitor revenue, risk, and engagement in one unified dashboard.",
  },
  {
    icon: Settings,
    title: "Powerful API",
    desc: "Developer‑friendly, versioned, and fully documented endpoints.",
  },
  {
    icon: Globe,
    title: "Global by default",
    desc: "Localization and compliance tooling for 40+ markets.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(700px_350px_at_20%_10%,rgba(99,102,241,0.15),transparent_60%),radial-gradient(700px_350px_at_80%_100%,rgba(56,189,248,0.12),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Do more with less</h2>
          <p className="mt-4 text-white/70">Everything you need to launch, scale, and operate a world‑class fintech product.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition">
              <div className="h-12 w-12 rounded-xl bg-white/10 grid place-items-center text-white border border-white/10 shadow-inner">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
