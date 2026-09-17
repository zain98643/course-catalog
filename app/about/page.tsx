// app/about/page.tsx
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans py-16 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <header className="space-y-4 border-b border-slate-800 pb-8">
          <Link
            href="/"
            className="inline-flex items-center text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors mb-2"
          >
            ← Back to Catalog
          </Link>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100">
            About Course Catalog
          </h1>
          <p className="text-slate-400 text-lg">
            An academic web application engineered with modern React server components and server-side evaluation patterns.
          </p>
        </header>

        {/* Technical Features Section */}
        <section className="space-y-6">
          <h2 className="text-xl font-bold text-slate-200">System Architecture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold mb-4">
                01
              </div>
              <h3 className="text-lg font-semibold text-slate-100 mb-2">Next.js 15 App Router</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Utilizes React Server Components for server-side rendering, dynamic route evaluation, and static path pre-generation via <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded text-indigo-300">generateStaticParams()</code>.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold mb-4">
                02
              </div>
              <h3 className="text-lg font-semibold text-slate-100 mb-2">TypeScript Integrity</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Enforces end-to-end type safety across API integrations, component props, and page param structures to prevent runtime exceptions.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold mb-4">
                03
              </div>
              <h3 className="text-lg font-semibold text-slate-100 mb-2">Interactive State Management</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Integrates granular Client Components for user interaction, state preservation, and seamless client-side UI updates.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold mb-4">
                04
              </div>
              <h3 className="text-lg font-semibold text-slate-100 mb-2">Modular Styling</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Styled using Tailwind CSS with cohesive color palettes, dark-mode elements, responsive grid systems, and subtle hover animations.
              </p>
            </div>
          </div>
        </section>

        {/* Project Meta Footer */}
        <section className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <p className="text-sm font-semibold text-slate-200">Repository Status</p>
            <p className="text-xs text-slate-400">Source code published to GitHub under <code className="text-indigo-400">Zain575/course-catalog</code></p>
          </div>
          <Link
            href="/"
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
          >
            Explore Courses
          </Link>
        </section>
      </div>
    </div>
  );
}