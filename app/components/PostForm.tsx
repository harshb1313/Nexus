'use client'
import React from 'react'
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Send, User, Tag, FileText, Sparkles, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
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
      const res = await fetch('https://nexus-wuaz.onrender.com/api/post', {
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

  const wordCount = content.split(' ').filter(word => word.length > 0).length;
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      {/* Header */}
      <div className="relative">
        <nav className="px-4 sm:px-6 lg:px-8 py-6">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <button
              onClick={() => router.back()}
              className="inline-flex items-center text-white/80 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="text-sm font-medium">Back</span>
            </button>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                {session?.user?.image ? (
                  <Image
                    src={session.user.image}
                    alt={session.user.name || 'User'}
                    width={32}
                    height={32}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <span className="text-xs font-bold text-white">
                    {session?.user?.name?.charAt(0)?.toUpperCase() || 'U'}
                  </span>
                )}
              </div>
              <span className="text-white/80 text-sm">{session?.user?.name || 'Anonymous'}</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="px-4 sm:px-6 lg:px-8 pb-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 text-purple-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Share Your Journey</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text mb-4">
              Create Your Story
            </h1>
            <p className="text-xl text-purple-100/80 max-w-2xl mx-auto">
              Share your startup journey with the world and inspire fellow entrepreneurs
            </p>
          </div>
        </div>
      </div>

      {/* Form Container */}
      <div className="relative px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl">
            <Form action='/create' onSubmit={handleSubmit} className="space-y-8">

              {/* Story Title */}
              <div className="space-y-3">
                <label className="flex items-center text-white text-lg font-semibold">
                  <FileText className="w-5 h-5 mr-3 text-purple-300" />
                  Story Title
                </label>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-focus-within:opacity-40 transition-opacity duration-300"></div>
                  <input
                    type='text'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='Give your story a compelling title...'
                    className="relative w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-lg"
                  />
                </div>
              </div>

              {/* Founder Name */}
              <div className="space-y-3">
                <label className="flex items-center text-white text-lg font-semibold">
                  <User className="w-5 h-5 mr-3 text-blue-300" />
                  Founder Name
                </label>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-20 group-focus-within:opacity-40 transition-opacity duration-300"></div>
                  <input
                    name='founderName'
                    type='text'
                    value={founder}
                    onChange={(e) => setFounder(e.target.value)}
                    placeholder='Your name as the founder'
                    className="relative w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-lg"
                  />
                </div>
              </div>

              {/* Tags */}
              <div className="space-y-3">
                <label className="flex items-center text-white text-lg font-semibold">
                  <Tag className="w-5 h-5 mr-3 text-pink-300" />
                  Tags
                </label>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur opacity-20 group-focus-within:opacity-40 transition-opacity duration-300"></div>
                  <input
                    name='tags'
                    type='text'
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    placeholder='Add tags separated by commas (e.g. SaaS, AI, Fintech)'
                    className="relative w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-lg"
                  />
                </div>
                {tags && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {tags.split(',').map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border border-purple-200/50"
                      >
                        {tag.trim()}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Story Content */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="flex items-center text-white text-lg font-semibold">
                    <Sparkles className="w-5 h-5 mr-3 text-yellow-300" />
                    Your Story
                  </label>
                  <div className="text-white/60 text-sm">
                    {wordCount} words • {readingTime} min read
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 rounded-2xl blur opacity-20 group-focus-within:opacity-40 transition-opacity duration-500"></div>
                  <textarea
                    name="story"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={12}
                    placeholder='Share your startup journey, challenges you faced, lessons learned, and what makes your story unique. Be authentic and detailed - your story could inspire thousands of other entrepreneurs...'
                    className="relative w-full px-6 py-6 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm resize-none text-lg leading-relaxed"
                  />
                </div>
                <p className="text-white/50 text-sm mt-2">
                  💡 Tip: Include specific details about your journey, challenges overcome, and key milestones to make your story more engaging.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                {/* <button
                  type="button"
                  className="sm:flex-1 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-2xl transition-all duration-300 hover:bg-white/20 hover:scale-105 transform"
                >
                  Save Draft
                </button> */}

                <button
                  type="submit"
                  disabled={!title || !content || !founder}
                  className="sm:flex-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 hover:from-purple-600 hover:via-pink-600 hover:to-purple-600 disabled:from-gray-500 disabled:via-gray-600 disabled:to-gray-500 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-3 group disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  <span>Publish Story</span>
                </button>
              </div>

              {/* Publishing Info */}
              <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4 mt-8">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-purple-200 font-semibold text-sm">Before you publish</h4>
                    <p className="text-purple-300/80 text-sm mt-1">
                      Your story will be visible to the entire community. Make sure to review your content for accuracy and authenticity.
                    </p>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostForm