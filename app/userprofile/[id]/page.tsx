import React from "react";
import StartupCard, { StartupCardProps } from "../../components/StartupCard";
import Image from "next/image";

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

    // Get user info from first post (if available)
    const userInfo = posts.length > 0 ? {
      name: posts[0].authorName,
      image: posts[0].authorImage || '/default-avatar.png',
      totalPosts: posts.length,
      totalViews: posts.reduce((sum, post) => sum + post.views, 0)
    } : null;

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              {userInfo && (
                <div className="flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-end space-y-6 sm:space-y-0 sm:space-x-8">
                  {/* Profile Image */}
                  <div className="relative">
                    <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full ring-4 ring-white/20 overflow-hidden bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                      {userInfo.image !== '/default-avatar.png' ? (
                        <img 
                          src={userInfo.image} 
                          alt={userInfo.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-3xl sm:text-4xl font-bold text-white">
                          {userInfo.name.charAt(0).toUpperCase()}
                        </span>
                      )}
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>

                  {/* User Info */}
                  <div className="flex-1 text-white">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                      {userInfo.name}
                    </h1>
                    {/* <p className="text-lg sm:text-xl text-purple-200 mb-4">Startup Enthusiast & Creator</p> */}
                    
                    {/* Stats */}
                    <div className="flex flex-wrap justify-center sm:justify-start gap-6 sm:gap-8">
                      <div className="text-center sm:text-left">
                        <div className="text-2xl sm:text-3xl font-bold text-white">{userInfo.totalPosts}</div>
                        <div className="text-sm text-purple-200">Stories</div>
                      </div>
                      {/* <div className="text-center sm:text-left">
                        <div className="text-2xl sm:text-3xl font-bold text-white">{userInfo.totalViews.toLocaleString()}</div>
                        <div className="text-sm text-purple-200">Views</div>
                      </div>
                      <div className="text-center sm:text-left">
                        <div className="text-2xl sm:text-3xl font-bold text-white">
                          {posts.length > 0 ? Math.floor(userInfo.totalViews / userInfo.totalPosts) : 0}
                        </div>
                        <div className="text-sm text-purple-200">Avg Views</div>
                      </div> */}
                    </div>
                  </div>
                </div>
              )}

              {!userInfo && (
                <div className="text-center text-white">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h1 className="text-4xl font-bold mb-2">User Profile</h1>
                </div>
              )}
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl transform -translate-x-24 translate-y-24"></div>
        </div>

        {/* Content Section */}
        <main className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            {/* Section Header */}
            <div className="mb-8 sm:mb-12">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    Published Stories
                  </h2>
                  <p className="text-gray-600">
                    {posts.length > 0 
                      ? `Discover ${posts.length} inspiring ${posts.length === 1 ? 'story' : 'stories'} shared by this creator`
                      : 'No stories have been shared yet'
                    }
                  </p>
                </div>
                
                {posts.length > 0 && (
                  <div className="flex items-center space-x-2 text-sm text-gray-500 bg-gray-100 px-4 py-2 rounded-full">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Last updated recently</span>
                  </div>
                )}
              </div>
              <div className="mt-4 h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </div>

            {/* Posts Content */}
            {posts.length === 0 ? (
              <div className="text-center py-16 sm:py-20">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-3">No Stories Yet</h3>
                <p className="text-gray-500 max-w-md mx-auto leading-relaxed">
                  This creator hasn&apos;t shared any stories yet. Check back soon to discover their startup journey and insights.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
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

                  return (
                    <div 
                      key={post._id} 
                      className="group transform transition-all duration-300 hover:scale-[1.005] hover:-translate-y-1 w-full"
                    >
                      <StartupCard post={cardPost} />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </main>
      </div>
    );
  } catch (error) {
    console.error('Error fetching user posts:', error);
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 flex items-center justify-center">
        <div className="max-w-md mx-auto px-6 py-12 text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
            <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5C2.962 18.333 3.924 20 5.464 20z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-3">Something went wrong</h1>
          <p className="text-red-600 mb-6 leading-relaxed">
            We couldn&apos;t load the user&apos;s posts right now. Please try refreshing the page or check back later.
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white font-medium rounded-lg hover:from-red-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Try Again
          </button>
        </div>
      </div>
    );
  }
}