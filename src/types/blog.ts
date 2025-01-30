import { Rental } from "./rentals";

export interface BlogTag {
  id: number;
  tag_name: string;
}

export interface BlogCategory {
  category_name: string;
  category_image: string | null;
}

export interface BlogAuthor {
  id: number;
  name: string;
  role: string;
  phone: string;
  picture: string | null;
  about: string;
  created_at: string;
  updated_at: string;
}

export interface Blog {
  id: number;
  created_at: string;
  updated_at: string;
  slug: string;
  title: string;
  blog_content: string;
  blog_duration_to_read: string;
  thumbnail_image: string | null;
  thumbnail_image_alt_description: string | null;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  category: BlogCategory;
  author: BlogAuthor;
  tags: BlogTag[];
}

export interface BlogsResponse {
  posts: Blog[];
  tags: BlogTag[];
  categories: BlogCategory[];
}

export interface BlogDetailResponse {
  data: Blog;
  toc: string;
  similar_listings: Rental[];
}

export type LatestBlogResponse = {
  recent_posts: Blog[];
};
