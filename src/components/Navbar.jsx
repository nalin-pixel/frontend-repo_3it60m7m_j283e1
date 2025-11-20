import { Menu, X, CreditCard, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-white">
            <div className="relative grid place-items-center h-9 w-9 rounded-xl bg-white/5 backdrop-blur border border-white/10 shadow-inner overflow-hidden">
              <Sparkles className="h-5 w-5 text-blue-400" />
            </div>
            <span className="text-lg font-semibold tracking-tight">Glasso</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-white/80 hover:text-white text-sm">Sign in</a>
            <a href="#get-started" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 hover:from-blue-400 hover:to-indigo-400 transition-colors">
              <CreditCard className="h-4 w-4" />
              Get started
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white/90" aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 text-white/80">
            <a href="#features" className="block py-2">Features</a>
            <a href="#pricing" className="block py-2">Pricing</a>
            <a href="#faq" className="block py-2">FAQ</a>
            <div className="pt-3 flex items-center gap-3">
              <a href="#" className="text-white/80">Sign in</a>
              <a href="#get-started" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/20">
                <CreditCard className="h-4 w-4" />
                Get started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
