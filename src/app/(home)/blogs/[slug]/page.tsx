import { BlogDetailResponse, LatestBlogResponse } from "@/types/blog";
import BlogDetailView from "@/sections/blogs/view/blog-detail-view";
import { notFound } from "next/navigation";
import LatestBlogs from "@/sections/blogs/components/latest-blogs";

// Enable ISR with a revalidation time of 1 hour
export const revalidate = 3600;
export const dynamicParams = true;
async function getBlog(slug: string): Promise<BlogDetailResponse> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/blogs-single/${slug}/`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch blog");
  }

  return res.json();
}

async function getLatestBlog(): Promise<LatestBlogResponse> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/latest-blogs/`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch latest blog");
  }

  return res.json();
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  try {
    const blog = await getBlog((await params).slug);
    const recentPosts = await getLatestBlog();
    return (
      <>
        <BlogDetailView blog={blog.data} />
        {/* <SimilarRentals similarRentals={blog.similar_listings} /> */}
        <LatestBlogs recent_posts={recentPosts.recent_posts} />
      </>
    );
  } catch {
    notFound();
  }
}
