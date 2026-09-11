import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center py-12 space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">Course Not Found</h2>
      <p className="text-gray-600">The requested course could not be located.</p>
      <Link href="/courses" className="inline-block text-blue-600 hover:underline font-medium">
        ← Back to Course List
      </Link>
    </div>
  );
}