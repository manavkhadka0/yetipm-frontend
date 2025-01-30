import { Blog } from "@/types/blog";
import { Badge } from "@/components/ui/badge";

interface BlogContentProps {
  blog: Blog;
}

export default function BlogContent({ blog }: BlogContentProps) {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        {/* Meta Description */}
        {blog.meta_description && (
          <p className="text-lg text-muted-foreground mb-8">
            {blog.meta_description}
          </p>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {blog.tags.map((tag) => (
            <Badge key={tag.id} variant="outline">
              {tag.tag_name}
            </Badge>
          ))}
        </div>

        {/* Author Info */}
        <div className="flex items-center gap-4 p-6 bg-muted rounded-lg mb-8">
          <div className="flex-shrink-0">
            {blog.author.picture ? (
              <img
                src={blog.author.picture}
                alt={blog.author.name}
                className="w-16 h-16 rounded-full object-cover"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">
                  {blog.author.name.charAt(0)}
                </span>
              </div>
            )}
          </div>
          <div>
            <h3 className="font-semibold">{blog.author.name}</h3>
            <p className="text-sm text-muted-foreground">{blog.author.role}</p>
            {blog.author.about && (
              <p className="text-sm mt-2">{blog.author.about}</p>
            )}
          </div>
        </div>

        <div dangerouslySetInnerHTML={{ __html: blog.blog_content }} />

        {/* Keywords */}
        {blog.meta_keywords && (
          <div className="text-sm text-muted-foreground mt-8">
            Keywords: {blog.meta_keywords}
          </div>
        )}
      </div>
    </div>
  );
}
