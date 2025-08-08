// components/Navbar.tsx (Server Component - NO 'use client')
import Link from 'next/link';
import { Zap, Home, PenTool } from 'lucide-react';
import { auth } from '@/auth';
import { LoginButton, LogoutButton } from '@/app/components/Buttons';
import MobileNav from './MobileNav'; // This will be a Client Component

const Navbar = async () => {
  const sessions = await auth();
  
  console.log('SESSION:', sessions);
  console.log('USER ID:', sessions?.user?.id);
  console.log('USER:', sessions?.user);

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-900/95 backdrop-blur-lg border-b border-white/10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
            <div className="relative p-2 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl group-hover:scale-105 transition-transform duration-200 shadow-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Nexus
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          {sessions?.user ? (
            <>
              {/* Home Link */}
              <Link
                href="/"
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200 backdrop-blur-sm"
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Link>

              {/* Create Link */}
              <Link
                href="/create"
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white hover:from-purple-500/30 hover:to-pink-500/30 border border-purple-500/30 hover:border-purple-500/50 rounded-xl transition-all duration-200 backdrop-blur-sm"
              >
                <PenTool className="w-4 h-4" />
                <span>Create</span>
              </Link>

              {/* User Profile */}
              {sessions.user.id ? (
                <Link
                  href={`/userprofile/${sessions?.user?.email}`}
                  className="flex items-center space-x-3 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 rounded-xl transition-all duration-200 backdrop-blur-sm group"
                >
                  <div className="relative">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-sm font-bold ring-2 ring-white/20 group-hover:ring-white/40 transition-all duration-200">
                      {sessions.user.image ? (
                        <img 
                          src={sessions.user.image} 
                          alt={sessions.user.name || 'User'}
                          className="w-full h-full rounded-full object-cover"
                        />
                      ) : (
                        sessions.user.name?.charAt(0).toUpperCase() || 'U'
                      )}
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900"></div>
                  </div>
                  <span className="hidden lg:block font-medium">{sessions.user.name}</span>
                </Link>
              ) : (
                <div className="px-3 py-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl">
                  No user ID found
                </div>
              )}

              {/* Logout Button */}
              <div className="ml-2">
                <LogoutButton />
              </div>
            </>
          ) : (
            <LoginButton />
          )}
        </div>

        {/* Mobile Navigation - Pass sessions as prop to Client Component */}
        <MobileNav sessions={sessions} />
      </nav>
    </header>
  );
};

export default Navbar;