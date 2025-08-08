import React from 'react';
import { PenTool } from 'lucide-react';
import { SessionProvider } from 'next-auth/react';
import PostForm from '../components/PostForm';

const Page = () => {
  return (
    <SessionProvider>
      <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/30 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-1/3 -right-1/4 w-80 h-80 bg-gradient-to-tl from-blue-500/20 to-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 left-1/2 w-72 h-72 bg-gradient-to-r from-pink-500/20 to-purple-500/25 rounded-full blur-3xl animate-pulse delay-500"></div>
          
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          ></div>
        </div>

        {/* Simple Hero */}
        

        {/* Form */}
        <div className="relative">
          <PostForm />
        </div>
      </div>
    </SessionProvider>
  );
};

export default Page;