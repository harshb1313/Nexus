import React from 'react';
import { PenTool, Send, Sparkles } from 'lucide-react';
import { SessionProvider } from 'next-auth/react';
import PostForm from '../components/PostForm';

const Page = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 overflow-hidden">
      {/* Organic flowing background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large flowing shapes */}
        <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-gradient-to-br from-emerald-300/40 to-teal-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/3 -right-1/4 w-80 h-80 bg-gradient-to-tl from-cyan-300/40 to-emerald-400/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/2 w-72 h-72 bg-gradient-to-r from-teal-300/30 to-cyan-300/40 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Smaller accent shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-bounce delay-300"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-emerald-200/20 rounded-full blur-xl animate-bounce delay-700"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-cyan-200/30 rounded-full blur-lg animate-bounce delay-1000"></div>
        
        {/* Subtle dot pattern overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        ></div>
        
        {/* Flowing lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,20 Q25,40 50,20 T100,30 L100,0 L0,0 Z" fill="rgba(255,255,255,0.2)"/>
            <path d="M0,80 Q25,60 50,80 T100,70 L100,100 L0,100 Z" fill="rgba(255,255,255,0.15)"/>
          </svg>
        </div>
      </div>

      <div className="relative flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-md rounded-full mb-4 border border-white/30 shadow-lg">
              <PenTool className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-emerald-100 to-teal-100 bg-clip-text text-transparent mb-2">
              Write Your Story
            </h1>
            <p className="text-white/80 text-lg">Share your creativity with the world</p>
          </div>

          {/* Form Card */}
          <div className="bg-white/15 backdrop-blur-xl rounded-3xl p-8 border border-white/25 shadow-2xl">
            
              <PostForm/>
          
            
            {/* Footer */}
            <div className="mt-6 text-center">
              <p className="text-white/60 text-sm">
                Your story will inspire others. Make it count! 
              </p>
            </div>
          </div>

          {/* Floating elements with complementary colors */}
          <div className="absolute -top-6 -left-6 w-12 h-12 bg-teal-300/30 rounded-full blur-sm animate-bounce delay-300"></div>
          <div className="absolute -bottom-4 -right-8 w-8 h-8 bg-cyan-300/30 rounded-full blur-sm animate-bounce delay-700"></div>
          <div className="absolute top-1/2 -right-12 w-6 h-6 bg-emerald-300/25 rounded-full blur-sm animate-bounce delay-1000"></div>
        </div>
      </div>
    </section>
  );
};

export default Page;
