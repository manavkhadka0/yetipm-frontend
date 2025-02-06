import { Blog } from "@/types/blog";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link href={`/blogs/${blog.slug}`}>
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
        <CardHeader className="p-0">
          <div className="relative h-48 w-full">
            <Image
              src={`${blog.thumbnail_image}` || "/blog-placeholder.jpg"}
              alt={blog.thumbnail_image_alt_description || blog.title}
              fill
              className="object-cover"
            />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(blog.created_at)}</span>
            </div>
            {blog.blog_duration_to_read && (
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{blog.blog_duration_to_read}</span>
              </div>
            )}
          </div>
          <h3 className="text-xl font-semibold mb-3 line-clamp-2">
            {blog.title}
          </h3>
          <div className="flex flex-wrap gap-2 mt-4">
            {blog.tags.map((tag) => (
              <Badge key={tag.id} variant="secondary">
                {tag.tag_name}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
