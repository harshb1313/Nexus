'use client'
import React from 'react'
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Send } from 'lucide-react';
import Form from 'next/form'
const PostForm = () => {
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [founder, setFounder] = useState('')
  const [content, setContent] = useState('');

  const { data: session } = useSession();
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const postData = {
      title,
      content,
      founder,
      tags: tags.split(",").map((t) => t.trim()),
      authorId: session?.user?.email,
      authorImage: session?.user?.image,
      authorName: session?.user?.name

    }
    try {
      const res = await fetch('http://localhost:5000/api/post', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)
      });

      if (res.ok) {
        console.log("Posted Your Story")
        router.push("/")
      } else {
        console.log("failed to push")
      }

    } catch (error) {
      console.log("error :", error)
    }
  }

  return (
    <Form action='/create' onSubmit={handleSubmit}>
      {/* Title Input */}
      <div className="space-y-2 mb-6">
        <label className="text-white/95 text-sm font-medium block">Story Title</label>
        <div className="relative">
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='title'
            className="w-full px-4 py-4 bg-white/10 border border-white/25 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
          />

        </div>
      </div>

      {/* Founders name*/}
      <div className="space-y-2 mb-6">
        <label className="text-white/95 text-sm font-medium block">Founder Name</label>
        <div className="relative">
          <input
            name='founderName'
            type='text'
            value={founder}
            onChange={(e)=>{setFounder(e.target.value)}}
            placeholder='Enter your name as the founder'
            className="w-full px-4 py-4 bg-white/10 border border-white/25 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
          />
          <div className="absolute right-4 top-4">
            <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="space-y-2 mb-6">
        <label className="text-white/95 text-sm font-medium block">Tags</label>
        <div className="relative">
          <input
            name='tags'
            type='text'
            value={tags}
            onChange={(e => setTags(e.target.value))}
            placeholder='Add tags separated by commas (e.g. Machine Learning, Software Development)'
            className="w-full px-4 py-4 bg-white/10 border border-white/25 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
          />

        </div>
      </div>

      {/* Story Textarea */}
      <div className="space-y-2 mb-6">
        <label className="text-white/95 text-sm font-medium block">Your Story</label>
        <div className="relative">
          <textarea
            name="story"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            cols={8}
            rows={5}
            placeholder='Write your story'
            className="w-full px-4 py-4 bg-white/10 border border-white/25 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-transparent transition-all duration-300 backdrop-blur-sm resize-none"
          />
        </div>
      </div>



      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl flex items-center justify-center space-x-2 group"
        >
          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          <span>Publish Story</span>
        </button>
      </div>
    </Form>

  )
}

export default PostForm
