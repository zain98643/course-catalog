// app/page.tsx
import Link from "next/link";
import { getCourses } from "@/lib/courses";

export default async function HomePage() {
  const courses = await getCourses();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Hero Banner Section */}
      <section className="relative overflow-hidden border-b border-slate-800 bg-slate-900/50 py-20 px-6 sm:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 uppercase inline-block">
            Academic Year 2026–2027
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-slate-100 via-slate-200 to-indigo-300 bg-clip-text text-transparent">
            University Course Directory
          </h1>
          <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Browse through core academic modules and elective specializations designed for advanced computer science curricula.
          </p>
          
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto pt-6 border-t border-slate-800/80">
            <div>
              <p className="text-2xl font-bold text-slate-100">{courses.length}</p>
              <p className="text-xs text-slate-400 uppercase tracking-wide mt-1">Available Courses</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-indigo-400">Next.js 15</p>
              <p className="text-xs text-slate-400 uppercase tracking-wide mt-1">App Architecture</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-100">100%</p>
              <p className="text-xs text-slate-400 uppercase tracking-wide mt-1">Type Safe</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Course Catalog Grid */}
      <section className="max-w-7xl mx-auto py-16 px-6 sm:px-12">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-2xl font-bold text-slate-100">Featured Courses</h2>
            <p className="text-sm text-slate-400 mt-1">Select a course to inspect prerequisites and detailed specifications.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course: any) => (
            <div
              key={course.id}
              className="group bg-slate-900/60 border border-slate-800 rounded-xl p-6 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-md border ${
                    course.isElective 
                      ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' 
                      : 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
                  }`}>
                    {course.isElective ? "Elective" : "Core Requirement"}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {course.credits} Credits
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-indigo-400 transition-colors">
                  {course.title}
                </h3>
                <p className="mt-3 text-slate-400 text-sm leading-relaxed line-clamp-3">
                  {course.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">ID: {course.id}</span>
                <Link
                  href={`/courses/${course.id}`}
                  className="inline-flex items-center text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  View Course Details
                  <svg
                    className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}