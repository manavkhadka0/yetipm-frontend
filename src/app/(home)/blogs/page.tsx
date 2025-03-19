import BlogsView from "@/sections/blogs/view/blogs-view";
import { BlogsResponse } from "@/types/blog";

// Enable ISR with a revalidation time of 1 hour
export const revalidate = 3600;

async function getBlogs(): Promise<BlogsResponse> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs/`);

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  return res.json();
}

export default async function BlogsPage() {
  const blogsData = await getBlogs();
  return <BlogsView blogs={blogsData.posts} />;
}
