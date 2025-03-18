import { blogPosts } from "@/data/blogData";
import BlogPost from "./BlogPosts";
import { Metadata } from "next";

export const revalidate = 86400; // 24 hours


// Generate metadata dynamically
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "This blog post does not exist.",
    };
  }

  return {
    title: `Edvantage Blog | ${post.title}`,
    description: `${post.excerpt}`,
    openGraph: {
      title: `Edvantage Blog | ${post.title}`,
      description: `${post.excerpt}`,
    },
  };
}

// Generate static paths for blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Page({ params, }: { params: Promise<{ slug: string }>; }) {
  const { slug } = await params
  return <BlogPost slug={slug} />;
}
