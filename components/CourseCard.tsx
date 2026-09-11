import Link from "next/link";

type CourseCardProps = {
  id: string;
  title: string;
  description: string;
  credits: number;
  likes: number;
};

export default function CourseCard({
  id,
  title,
  description,
  credits,
  likes,
}: CourseCardProps) {
  return (
    <Link
      href={`/courses/${id}`}
      className="block p-5 border rounded-lg shadow-sm hover:shadow-md transition bg-white border-gray-200"
    >
      <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>Credits: {credits}</span>
        <span>❤️ {likes}</span>
      </div>
    </Link>
  );
}