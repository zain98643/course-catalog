import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Course Catalog</h1>
      <p className="text-gray-600">
        Welcome to the course catalog built with Next.js App Router.
      </p>
      <Link
        href="/courses"
        className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        View Courses
      </Link>
    </div>
  );
}