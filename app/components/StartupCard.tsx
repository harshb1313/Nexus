
import React from "react";
import Link from 'next/link'
import Image from "next/image";
import { Zap, ArrowUpRight, Eye, Calendar, Tag } from "lucide-react";

export interface StartupCardProps {
  post: {
    _id: string
    title: string;
    founder: string;
    tags: string;
    authorName: string;
    authorImage: string;
    createdAt: string;
  }
};

const StartupCard = ({ post }: { post: StartupCardProps["post"] }) => {
  return (
    <Link href={`post/${post._id}`}>
      <div className="p-5 border rounded-lg hover:shadow-md transition">
        <div className="flex items-center gap-3 mb-2">
          <Image
            src={post.authorImage}
            alt="author"
            width={40}  // 40px = w-10 in Tailwind
            height={40} // 40px = h-10 in Tailwind
            className="rounded-full"
          />
          <div>
            <p className="font-semibold">{post.authorName}</p>
            <p className="text-sm text-gray-500">{new Date(post.createdAt).toLocaleDateString()}</p>
          </div>
        </div>
        <h2 className="text-xl font-bold">{post.title}</h2>
        <p className="text-sm text-gray-600">By {post.founder}</p>
      </div>
    </Link>

  );
};
export default StartupCard