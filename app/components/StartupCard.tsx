import React from "react";
import Link from 'next/link';
import Image from "next/image";

export interface StartupCardProps {
  post: {
    _id: string;
    title: string;
    founder: string;
    tags: string[];
    authorName: string;
    authorImage: string;
    createdAt: string;
  };
}

const StartupCard = ({ post }: StartupCardProps) => {
  return (
    <Link href={`/post/${post._id}`}>
      <div className="p-5 border rounded-lg hover:shadow-md transition">
        <div className="flex items-center gap-3 mb-2">
          <Image
            src={post.authorImage}
            alt={`${post.authorName} profile picture`}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="font-semibold">{post.authorName}</p>
            <p className="text-sm text-gray-500">
              {new Date(post.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
        
        <h2 className="text-xl font-bold mb-2">{post.title}</h2>
        <p className="text-sm text-gray-600 mb-3">Founder: {post.founder}</p>
        
        {/* Display tags if you want to show them */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-xs rounded-full text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};

export default StartupCard;