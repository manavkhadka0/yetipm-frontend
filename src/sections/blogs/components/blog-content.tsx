"use client";

import { Blog } from "@/types/blog";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";
import { CalendarDays, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface BlogContentProps {
  blog: Blog;
}

export default function BlogContent({ blog }: BlogContentProps) {
  const shareUrl = `https://yetipm-frontend-xi.vercel.app/blogs/${blog.slug}`;

  return (
    <article className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        {/* Meta Description */}
        {blog.meta_description && (
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {blog.meta_description}
          </p>
        )}

        {/* Tags and Share Buttons */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag) => (
              <Badge key={tag.id} variant="outline" className="px-3 py-1">
                {tag.tag_name}
              </Badge>
            ))}
          </div>

          <div className="flex gap-2">
            <FacebookShareButton url={shareUrl} quote={blog.meta_description}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton url={shareUrl} title={blog.title}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <LinkedinShareButton url={shareUrl}>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
          </div>
        </div>

        {/* Blog Info */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <div className="flex items-center gap-1">
            <CalendarDays className="w-4 h-4" />
            <span>{new Date(blog.created_at).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{blog.blog_duration_to_read || "5 min read"}</span>
          </div>
        </div>

        {/* Author Info */}
        <div className="flex items-start gap-6 p-8 bg-muted/50 rounded-xl mb-12 border shadow-sm">
          <div className="flex-shrink-0">
            {blog.author.picture ? (
              <img
                src={blog.author.picture}
                alt={blog.author.name}
                className="w-20 h-20 rounded-full object-cover border-2 border-primary/10"
              />
            ) : (
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-3xl font-bold text-primary">
                  {blog.author.name.charAt(0)}
                </span>
              </div>
            )}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold">{blog.author.name}</h3>
            <p className="text-sm text-muted-foreground font-medium">
              {blog.author.role}
            </p>
            {blog.author.about && (
              <p className="text-sm mt-3 leading-relaxed text-muted-foreground">
                {blog.author.about}
              </p>
            )}
          </div>
        </div>

        {/* Blog Content */}
        <div
          className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-semibold prose-a:text-primary"
          dangerouslySetInnerHTML={{ __html: blog.blog_content }}
        />

        {/* Keywords */}
        {blog.meta_keywords && (
          <div className="text-sm text-muted-foreground mt-12 pt-8 border-t">
            <span className="font-medium">Keywords:</span> {blog.meta_keywords}
          </div>
        )}

        {/* Bottom Share Buttons */}
        <div className="mt-12 pt-8 border-t">
          <h4 className="text-center text-sm font-medium mb-4">
            Share this article
          </h4>
          <div className="flex justify-center gap-3">
            <FacebookShareButton url={shareUrl} quote={blog.meta_description}>
              <FacebookIcon size={40} round />
            </FacebookShareButton>
            <TwitterShareButton url={shareUrl} title={blog.title}>
              <TwitterIcon size={40} round />
            </TwitterShareButton>
            <LinkedinShareButton url={shareUrl}>
              <LinkedinIcon size={40} round />
            </LinkedinShareButton>
          </div>
        </div>
      </div>
    </article>
  );
}
