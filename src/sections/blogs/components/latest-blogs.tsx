import BlogCard from "@/components/cards/BlogCard";
import HeadingSection from "@/components/common/heading-section";
import ResponsiveContainer from "@/components/common/responsive-container";
import { Blog } from "@/types/blog";

type LatestBlogsProps = {
  recent_posts: Blog[];
};

export default function LatestBlogs({ recent_posts }: LatestBlogsProps) {
  return (
    <ResponsiveContainer paddingY="md" paddingX="md">
      <HeadingSection
        badge="Latest Blogs"
        title="Your Latest Property Management Articles"
        subtitle="You can find the latest property management articles here"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {recent_posts.map((post) => (
          <BlogCard key={post.id} blog={post} />
        ))}
      </div>
    </ResponsiveContainer>
  );
}
