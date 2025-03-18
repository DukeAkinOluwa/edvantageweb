import { blogPosts } from "@/data/blogData";
import BlogPost from "./BlogPosts";

export const revalidate = 86400; // 24 hours

// Generate static paths for blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params
  return <BlogPost slug={slug} />;
}
