import LikeButton from "@/components/LikeButton";
import { getCourse, getCourses } from "@/lib/courses";
import { notFound } from "next/navigation";

type CoursePageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const courses = await getCourses();
  return courses.map((course) => ({
    id: course.id,
  }));
}

export default async function CourseDetailPage({ params }: CoursePageProps) {
  const { id } = await params;
  const course = await getCourse(id);

  if (!course) {
    notFound();
  }

  return (
    <div className="space-y-6 bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
      <div className="flex justify-between items-start">
        <h1 className="text-3xl font-bold">{course.title}</h1>
        <LikeButton initialLikes={course.likes} />
      </div>
      <p className="text-gray-700 text-lg">{course.description}</p>
      <div className="flex gap-4 text-sm text-gray-500 pt-4 border-t border-gray-100">
        <span>Credits: {course.credits}</span>
        <span>Type: {course.isElective ? "Elective" : "Core"}</span>
      </div>
    </div>
  );
}