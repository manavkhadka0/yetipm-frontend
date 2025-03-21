import BlogsHero from "../components/blogs-hero";
import BlogsGrid from "../components/blogs-grid";
import { Blog } from "@/types/blog";

interface BlogsViewProps {
  blogs: Blog[];
}

export default function BlogsView({ blogs }: BlogsViewProps) {
  return (
    <main className="min-h-screen bg-background py-8 md:py-16">
      <BlogsHero />
      <div className="container mx-auto px-4 py-16">
        <BlogsGrid blogs={blogs} />
      </div>
    </main>
  );
}
