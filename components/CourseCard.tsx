import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CourseCardProps {
  id: string | number;
  title: string;
  description: string;
  credits: number;
  likes: number;
}

export default function CourseCard({ id, title, description, credits, likes }: CourseCardProps) {
  return (
    <Link href={`/courses/${id}`}>
      <Card className="hover:shadow-md hover:border-blue-300 transition h-full flex flex-col justify-between">
        <CardHeader>
          <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <p className="text-sm text-muted-foreground">{description}</p>
          <div className="flex items-center justify-between mt-auto">
            <span className="text-sm font-medium text-slate-600">{credits} Credits</span>
            <Button variant="ghost" size="sm">
              ♥ {likes}
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}