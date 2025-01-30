import { Blog } from "@/types/blog";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";
import { formatDate } from "@/lib/utils";
import Image from "next/image";

interface BlogDetailHeroProps {
  blog: Blog;
}

export default function BlogDetailHero({ blog }: BlogDetailHeroProps) {
  return (
    <div className="relative">
      {/* Hero Image */}
      <div className="relative h-[400px] md:h-[500px]">
        <Image
          src={blog.thumbnail_image || "/blog-placeholder.jpg"}
          alt={blog.thumbnail_image_alt_description || blog.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-white">
            {/* Category */}
            <Badge variant="secondary" className="mb-4">
              {blog.category.category_name}
            </Badge>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {blog.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-200">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{blog.author.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(blog.created_at)}</span>
              </div>
              {blog.blog_duration_to_read && (
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{blog.blog_duration_to_read}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
