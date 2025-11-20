import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$0",
    cadence: "/mo",
    highlight: "Perfect to evaluate",
    features: ["Up to 1,000 API calls", "Basic analytics", "Community support"],
    cta: "Get started",
    popular: false,
  },
  {
    name: "Growth",
    price: "$49",
    cadence: "/mo",
    highlight: "Most popular",
    features: ["100k API calls", "Real-time webhooks", "Priority support"],
    cta: "Start free trial",
    popular: true,
  },
  {
    name: "Scale",
    price: "$199",
    cadence: "/mo",
    highlight: "For serious teams",
    features: ["Unlimited API calls", "Dedicated SRE", "Custom SLAs"],
    cta: "Contact sales",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(700px_450px_at_70%_30%,rgba(59,130,246,0.15),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Simple, transparent pricing</h2>
          <p className="mt-4 text-white/70">Start free. Upgrade when you scale. Cancel anytime.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div key={tier.name} className={`relative rounded-2xl border ${tier.popular ? 'border-blue-400/30' : 'border-white/10'} bg-white/5 p-6 backdrop-blur shadow-xl ${tier.popular ? 'shadow-blue-500/10' : 'shadow-slate-900/10'}`}>
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-3 py-1 text-xs font-medium text-white shadow">
                  Popular
                </div>
              )}
              <h3 className="text-white text-lg font-semibold">{tier.name}</h3>
              <p className="mt-1 text-sm text-white/70">{tier.highlight}</p>
              <div className="mt-6 flex items-end gap-1">
                <span className="text-4xl font-semibold text-white">{tier.price}</span>
                <span className="text-white/60 mb-1">{tier.cadence}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-white/80 text-sm">
                    <Check className="h-4 w-4 text-emerald-400" /> {f}
                  </li>
                ))}
              </ul>
              <a href="#get-started" className={`mt-8 inline-flex w-full justify-center rounded-xl px-4 py-2.5 font-semibold transition ${tier.popular ? 'bg-white text-slate-900 hover:bg-slate-100' : 'bg-white/10 text-white hover:bg-white/15'} ring-1 ${tier.popular ? 'ring-white/10' : 'ring-white/15'}`}>
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
