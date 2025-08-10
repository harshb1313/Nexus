import { ArrowRight, Sparkles, Users, TrendingUp, BookOpen } from 'lucide-react';
import SearchForm from '@/app/components/SearchForm'
import FetchPosts from '../components/fetchPosts';
import Link from 'next/link'

export default async function StartupHero({ searchParams }: { searchParams: Promise<{ query?: 'string' }> }) {
  const query = (await searchParams).query
  const posts = [{ _createdAt: 'yesterday', _views: '55', _id: 1, _author: { id: 1 }, _image: '', description: "This is description", category: "Robots", title: "weRobots" }]
  
  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          ></div>
          
          {/* Floating Orbs */}
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-2xl animate-bounce delay-500"></div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            {/* Premium Badge */}
            {/* <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 text-purple-200 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              <span>Join 10,000+ Entrepreneurs</span>
            </div> */}

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-transparent bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text mb-8 leading-tight">
              Share Your Startup
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                Journey
              </span>
              <span className="text-white"> with the World</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-purple-100/90 max-w-4xl mx-auto mb-12 leading-relaxed">
              Connect with fellow entrepreneurs, share your experiences, and discover the stories behind successful startups. 
              <span className="text-white font-medium"> Build your audience and grow your network.</span>
            </p>

            {/* Stats Row */}
            {/* <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <Users className="w-5 h-5 text-purple-300" />
                <div className="text-left">
                  <div className="text-white font-bold text-lg">10K+</div>
                  <div className="text-purple-200 text-sm">Active Users</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <BookOpen className="w-5 h-5 text-pink-300" />
                <div className="text-left">
                  <div className="text-white font-bold text-lg">500+</div>
                  <div className="text-purple-200 text-sm">Stories Shared</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <TrendingUp className="w-5 h-5 text-blue-300" />
                <div className="text-left">
                  <div className="text-white font-bold text-lg">95%</div>
                  <div className="text-purple-200 text-sm">Success Rate</div>
                </div>
              </div>
            </div> */}

            {/* Search Bar */}
            {/* <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-2xl blur opacity-75 animate-pulse"></div>
                <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-2">
                  <SearchForm query={query} />
                </div>
              </div>
            </div> */}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
              {/* <button className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 hover:-translate-y-2 active:scale-95 active:translate-y-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative group-hover:translate-x-1 transition-transform duration-200">Start Writing</span>
                <ArrowRight className="relative w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
                <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              </button> */}
              
              <Link href={'/explore-page'}>
                <button className="group inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 border-2 border-white/30 hover:border-white/50 hover:shadow-xl transform hover:scale-105 hover:-translate-y-2 active:scale-95 active:translate-y-0">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Explore Stories</span>
                  <BookOpen className="w-6 h-6 group-hover:rotate-6 transition-transform duration-200" />
                </button>
              </Link>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-6 transition-transform duration-300">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Share Your Story</h3>
                <p className="text-purple-200 leading-relaxed">
                  Write compelling narratives about your startup journey, challenges, and victories that inspire others.
                </p>
              </div>

              <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-6 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Build Community</h3>
                <p className="text-purple-200 leading-relaxed">
                  Connect with like-minded entrepreneurs and build meaningful relationships that fuel growth.
                </p>
              </div>

              <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-6 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Grow Your Reach</h3>
                <p className="text-purple-200 leading-relaxed">
                  Amplify your message and reach thousands of potential customers, investors, and collaborators.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Posts Section */}
      {/* <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <FetchPosts />
      </section> */}
    </>
  );
}