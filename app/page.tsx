// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-800/80 bg-slate-900/40 py-28 px-6 sm:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <span className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 uppercase inline-block">
            Academic Portal 2026–2027
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-slate-100 via-slate-200 to-indigo-300 bg-clip-text text-transparent leading-tight">
            Next.js Course Directory System
          </h1>
          <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Welcome to the central academic hub. Explore specialized computer science modules, review prerequisites, and manage course offerings in one place.
          </p>
          
          {/* Action Navigation Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/courses"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
            >
              Explore Course Catalog →
            </Link>
            <Link
              href="/about"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-sm transition-all border border-slate-800 hover:border-slate-700"
            >
              About Platform
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="max-w-6xl mx-auto py-20 px-6 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold mb-4">
              01
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">Dynamic Routing</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Explore static path generation and server-evaluated route components built with Next.js 15.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold mb-4">
              02
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">Type-Safe Architecture</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Fully typed course metadata models, parameters, and interactive client state handling.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold mb-4">
              03
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">Modern Tailwind UI</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Designed with glassmorphism backgrounds, custom color scales, and responsive layouts.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}