import React from "react";
import StartupCard, { StartupCardProps } from "../../components/StartupCard";

interface Post {
  _id: string;
  title: string;
  founder: string;
  content: string;
  tags: string[];
  authorId: string;
  authorName: string;
  authorImage: string;
  views: number;
  createdAt: string;
}

interface UserPageProps {
  params: Promise<{ id: string }>; // Changed: params is now a Promise
}

export default async function UserPage({ params }: UserPageProps) {
  // Await the params before using them
  const { id } = await params;
  console.log("params id →", id);
  
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
    const res = await fetch(`${baseUrl}/api/user-profile/${id}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }

    const posts: Post[] = await res.json();

    return (
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Posts by this user</h1>
        {posts.length === 0 ? (
          <p className="text-gray-500">No posts found for this user.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {posts.map((post: Post) => {
              // Transform Post to match StartupCardProps
              const cardPost: StartupCardProps["post"] = {
                _id: post._id,
                title: post.title,
                founder: post.founder,
                tags: post.tags,
                authorName: post.authorName,
                authorImage: post.authorImage || '/default-avatar.png',
                createdAt: post.createdAt,
              };
              
              return <StartupCard key={post._id} post={cardPost} />;
            })}
          </div>
        )}
      </main>
    );
  } catch (error) {
    console.error('Error fetching user posts:', error);
    return (
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Posts by this user</h1>
        <p className="text-red-500">Failed to load posts. Please try again later.</p>
      </main>
    );
  }
}