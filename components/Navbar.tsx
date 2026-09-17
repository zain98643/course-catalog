// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50 px-6 sm:px-12 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="w-3 h-3 rounded-full bg-indigo-500"></span>
          <span className="text-lg font-bold tracking-tight text-slate-100">
            CourseCatalog
          </span>
        </Link>
        <div className="flex items-center space-x-6 text-sm font-medium">
          <Link
            href="/"
            className="text-slate-300 hover:text-indigo-400 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/courses"
            className="text-slate-300 hover:text-indigo-400 transition-colors"
          >
            Courses
          </Link>
          <Link
            href="/about"
            className="text-slate-300 hover:text-indigo-400 transition-colors"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}