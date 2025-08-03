import React from 'react'

interface PostId {
    params: {
        id: string
    }
}

const fetchPost = async(id:string)=>{
    const res = await fetch (`http://localhost:5000/api/posts/${id}`,{
        cache:'no-store'
    })
    return res.json()
}

const Page = async ({ params }: PostId) => {
    const  post  = await fetchPost((await params).id);
    return <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 text-sm mb-2">
        By {post.authorName} · {new Date(post.createdAt).toLocaleDateString()}
      </p>

      {/* ✅ Here's your content */}
      <div className="prose max-w-none">{post.content}</div>
    </main>;
};


export default Page
