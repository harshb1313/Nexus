import React from 'react'
import { StartupCardProps } from './StartupCard'
import StartupCard from './StartupCard'

export const getData = async () => {
    const res = await fetch("http://localhost:5000/api/posts", {
        cache: 'no-store',
    })
    return res.json()
}

const FetchPosts = async () => {
    const post = await getData()
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                {/* Header Section */}
                <div className="mb-12 text-center">
                    <h1 className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
                        EXPLORE STORIES
                    </h1>
                    <div className="mt-4 h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                    <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
                        Discover inspiring stories from innovative startups and entrepreneurs
                    </p>
                </div>

                {/* Posts List */}
                <div className="space-y-4">
                    {post.map((post: StartupCardProps['post']) => (
                        <div 
                            key={post._id!} 
                            className="group transform transition-all duration-300 hover:scale-[1.005] hover:-translate-y-1 w-full"
                        >
                            <StartupCard post={post} />
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {post.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <div className="w-24 h-24 mb-6 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                            <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3v6m0 0v6m0-6h6m-6 0H9" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-slate-700 mb-2">No Stories Yet</h3>
                        <p className="text-slate-500">Check back soon for new startup stories and insights.</p>
                    </div>
                )}
            </div>
        </main>
    )
}

export default FetchPosts
