// components/MobileNav.tsx
'use client';

import Link from 'next/link';
import { Menu, X, Zap, User, PenTool, Home } from 'lucide-react';
import { LoginButton, LogoutButton } from '@/app/components/Buttons';
import { useState, useEffect } from 'react';
import { Session } from 'next-auth';

interface MobileNavProps {
  sessions: Session | null;
}

const MobileNav = ({ sessions }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100%';
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.height = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.documentElement.style.overflow = '';
      document.documentElement.style.height = '';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.documentElement.style.overflow = '';
      document.documentElement.style.height = '';
    };
  }, [isOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  // Handle resize to close menu on desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  return (
    <div className="block md:hidden">
      {/* Mobile Menu Button with improved responsive design */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          relative p-2.5 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-300 
          ${isOpen 
            ? 'bg-purple-600/20 text-white border border-purple-500/30' 
            : 'bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border border-white/10 hover:border-white/20'
          }
          backdrop-blur-sm shadow-lg touch-manipulation
          active:scale-95 active:bg-purple-600/30
        `}
        aria-label="Toggle mobile menu"
        aria-expanded={isOpen}
        type="button"
      >
        <div className="relative w-5 h-5 sm:w-6 sm:h-6">
          <div className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'}`}>
            <Menu className="w-full h-full" />
          </div>
          <div className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'}`}>
            <X className="w-full h-full" />
          </div>
        </div>
      </button>

      {/* Mobile Menu Overlay - Full screen coverage */}
      {isOpen && (
        <>
          {/* Backdrop - Covers entire viewport */}
          <div 
            className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-md animate-in fade-in duration-300"
            style={{ 
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: '100vw',
              height: '100vh',
              minHeight: '100vh'
            }}
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          
          {/* Menu Panel - Full height sidebar */}
          <div 
            className={`
              fixed top-0 right-0 z-[9999]
              w-full max-w-xs xs:max-w-sm sm:max-w-md
              bg-slate-900/95 backdrop-blur-xl border-l border-white/10 
              shadow-2xl shadow-black/50
              animate-in slide-in-from-right duration-300
              flex flex-col
            `}
            style={{ 
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              height: '100vh',
              minHeight: '100vh',
              maxHeight: '100vh'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Header - Fixed at top */}
            <div className="flex-shrink-0 bg-slate-900/95 backdrop-blur-xl border-b border-white/10">
              <div className="flex items-center justify-between p-4 sm:p-6">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg sm:rounded-xl blur opacity-30"></div>
                    <div className="relative p-1.5 sm:p-2 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg sm:rounded-xl shadow-lg">
                      <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                  </div>
                  <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                    Nexus
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 sm:p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg sm:rounded-xl transition-all duration-200 backdrop-blur-sm touch-manipulation active:scale-95"
                  aria-label="Close menu"
                  type="button"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
            </div>

            {/* Mobile Menu Content - Scrollable middle section */}
            <div className="flex-1 overflow-y-auto overscroll-contain">
              <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 min-h-full">
                {sessions?.user ? (
                  <>
                    {/* User Profile Section */}
                    <div className="bg-gradient-to-r from-white/5 to-purple-500/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg">
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className="relative">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-base sm:text-lg font-bold ring-2 ring-white/20 shadow-lg flex-shrink-0">
                            {sessions.user.image ? (
                              <img 
                                src={sessions.user.image} 
                                alt={sessions.user.name || 'User'}
                                className="w-full h-full rounded-full object-cover"
                              />
                            ) : (
                              sessions.user.name?.charAt(0)?.toUpperCase() || 'U'
                            )}
                          </div>
                          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-slate-900 shadow-sm"></div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white font-semibold text-base sm:text-lg truncate">{sessions.user.name || 'User'}</p>
                          <p className="text-white/60 text-xs sm:text-sm truncate">{sessions.user.email}</p>
                          <div className="mt-1 px-2 py-0.5 bg-green-500/20 text-green-300 text-xs rounded-full inline-block">
                            Online
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Navigation Links */}
                    <nav className="space-y-2 sm:space-y-3" role="navigation">
                      <Link
                        href="/"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 text-white hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 hover:border-purple-500/20 border border-transparent rounded-lg sm:rounded-xl transition-all duration-200 group backdrop-blur-sm touch-manipulation active:scale-[0.98]"
                      >
                        <div className="p-1.5 sm:p-2 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors flex-shrink-0">
                          <Home className="w-4 h-4 sm:w-5 sm:h-5 text-purple-300 group-hover:text-white transition-colors" />
                        </div>
                        <span className="font-medium text-base sm:text-lg">Home</span>
                      </Link>

                      <Link
                        href="/create"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white hover:from-purple-500/30 hover:to-pink-500/30 border border-purple-500/30 hover:border-purple-500/50 rounded-lg sm:rounded-xl transition-all duration-200 group backdrop-blur-sm shadow-lg touch-manipulation active:scale-[0.98]"
                      >
                        <div className="p-1.5 sm:p-2 bg-pink-500/30 rounded-lg group-hover:bg-pink-500/40 transition-colors flex-shrink-0">
                          <PenTool className="w-4 h-4 sm:w-5 sm:h-5 text-pink-300 group-hover:text-white transition-colors" />
                        </div>
                        <span className="font-medium text-base sm:text-lg">Create Story</span>
                      </Link>

                      {sessions.user.id && (
                        <Link
                          href={`/userprofile/${sessions?.user?.email}`}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 text-white hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 hover:border-blue-500/20 border border-transparent rounded-lg sm:rounded-xl transition-all duration-200 group backdrop-blur-sm touch-manipulation active:scale-[0.98]"
                        >
                          <div className="p-1.5 sm:p-2 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors flex-shrink-0">
                            <User className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300 group-hover:text-white transition-colors" />
                          </div>
                          <span className="font-medium text-base sm:text-lg">My Profile</span>
                        </Link>
                      )}
                    </nav>
                  </>
                ) : (
                  <div className="space-y-4 sm:space-y-6">
                    <div className="text-center py-8 sm:py-12">
                      <div className="mb-4 sm:mb-6">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-3 sm:mb-4 shadow-xl">
                          <User className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Welcome to Nexus</h3>
                        <p className="text-white/70 text-sm px-4 leading-relaxed">Join our community of entrepreneurs and start creating amazing stories</p>
                      </div>
                      <div className="space-y-3">
                        <LoginButton />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Logout Button - Fixed at bottom for logged in users */}
            {sessions?.user && (
              <div className="flex-shrink-0 border-t border-white/10 bg-slate-900/95 backdrop-blur-xl">
                <div className="p-4 sm:p-6">
                  <LogoutButton />
                </div>
              </div>
            )}

            {/* Safe area for devices with notches - Only if needed */}
            <div className="flex-shrink-0 h-[env(safe-area-inset-bottom)] bg-slate-900/95" />
          </div>
        </>
      )}
    </div>
  );
};

export default MobileNav;