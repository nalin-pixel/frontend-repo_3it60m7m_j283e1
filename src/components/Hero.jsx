import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(59,130,246,0.3),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-8 pb-24 md:pt-16 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                New: Real‑time risk alerts
              </div>
              <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.05]">
                The modern way to launch a fintech SaaS
              </h1>
              <p className="mt-5 text-white/70 text-lg max-w-xl">
                Accept payments, issue cards, and manage compliance with a beautiful, secure platform that scales with you.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#get-started" className="inline-flex justify-center rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold shadow-lg shadow-slate-900/5 ring-1 ring-white/10 hover:bg-slate-100 transition">Start free trial</a>
                <a href="#features" className="inline-flex justify-center rounded-xl bg-white/10 text-white px-5 py-3 font-semibold backdrop-blur ring-1 ring-white/15 hover:bg-white/15 transition">See features</a>
              </div>
              <div className="mt-6 flex items-center gap-5 text-white/60">
                <div className="flex -space-x-2">
                  {[0,1,2,3,4].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/40?img=${i+10}`} alt="" className="h-8 w-8 rounded-full ring-2 ring-slate-900/40" />
                  ))}
                </div>
                <p className="text-sm">Trusted by 2,500+ founders</p>
              </div>
            </motion.div>
          </div>

          {/* 3D Spline Scene */}
          <div className="order-1 lg:order-2 relative h-[420px] sm:h-[520px] lg:h-[640px]">
            <div className="absolute inset-0 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur overflow-hidden">
              <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
