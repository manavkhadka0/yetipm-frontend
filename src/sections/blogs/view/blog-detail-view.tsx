import { Blog } from "@/types/blog";
import BlogDetailHero from "../components/blog-detail-hero";
import BlogContent from "../components/blog-content";

interface BlogDetailViewProps {
  blog: Blog;
}

export default function BlogDetailView({ blog }: BlogDetailViewProps) {
  return (
    <main className="min-h-screen bg-background">
      <BlogDetailHero blog={blog} />
      <BlogContent blog={blog} />
    </main>
  );
}
