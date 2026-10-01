import CourseCard from "@/components/CourseCard";
import * as CoursesData from "@/lib/courses";

export default function CoursesPage() {
  // Fallback to whichever export name exists in your lib/courses file
  const courseList = 
    (CoursesData as any).courses || 
    (CoursesData as any).default || 
    [];

  return (
    <main className="max-w-6xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Available Courses</h1>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {courseList.map((course: any) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </main>
  );
}