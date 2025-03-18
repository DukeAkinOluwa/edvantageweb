// app/blog/[slug]/BlogPost.tsx
"use client";

import { useState, useEffect } from "react";
import { blogPosts } from "@/data/blogData";
import PageTransition from "@/components/PageTransition";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface BlogPostProps {
  slug: string;
}

export default function BlogPost({ slug }: BlogPostProps) {
  const [post, setPost] = useState<typeof blogPosts[0] | undefined>(undefined);

  useEffect(() => {
    const foundPost = blogPosts.find((p) => p.slug === slug);
    setPost(foundPost);
  }, [slug]);

  if (!post) {
    return (
      <div className="container mx-auto py-16 px-4 text-center">
        <h1 className="text-2xl font-bold">Blog post not found</h1>
        <p className="mt-4">
          The article you&apos;re looking for doesn&apos;t exist or has been
          removed.
        </p>
      </div>
    );
  }

  return (
    <>
      <Toaster />
      <Sonner />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <PageTransition>
            <div className="container mx-auto py-16 px-4">
              <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-[400px] object-cover rounded-xl"
                    width={1000}
                    height={1000}
                  />
                </div>
                <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                <div className="flex items-center text-gray-600 mb-8">
                  <span>By {post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                </div>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    {post.excerpt}
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    At Edvantage, we believe that every student has the
                    potential to excel academically when given the right tools
                    and support.
                  </p>
                  <h2 className="text-2xl font-semibold mt-8 mb-4">
                    Understanding the Challenge
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    Many students struggle with juggling multiple assignments,
                    project deadlines, and exam preparations while trying to
                    maintain a balanced life.
                  </p>
                </div>
              </div>
            </div>
          </PageTransition>
        </main>
        <Footer />
      </div>
    </>
  );
}