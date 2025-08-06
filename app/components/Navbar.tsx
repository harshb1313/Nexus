import Link from 'next/link';
import { Menu, X, Zap } from 'lucide-react';
import { auth } from '@/auth';
import { signIn, signOut } from 'next-auth/react';
import { redirect } from 'next/dist/server/api-utils';
import { LoginButton, LogoutButton } from '@/app/components/Buttons';

const Navbar = async () => {
  const sessions = await auth();
  
  // Move console.log outside JSX
  console.log('SESSION:', sessions);
  console.log('USER ID:', sessions?.user?.id);
  console.log('USER:', sessions?.user);
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gray-900 text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="p-2 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl group-hover:scale-105 transition-transform duration-200 shadow-lg">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-white">
            Nexus
          </span>
        </Link>

        {/* Navigation Items */}
        <div className="flex items-center space-x-6">
          {sessions?.user ? (
            <>
              {/* Create Link */}
              <Link 
                href="/create"
                className="flex items-center px-4 py-2 text-sm font-medium text-white hover:text-gray-300 rounded-lg transition-colors duration-200"
              >
                <span>Create</span>
              </Link>
              
              {/* User Profile Link - Only render if ID exists */}
              {sessions.user.id ? (
                <Link 
                  href={`/userprofile/${sessions?.user?.email}`}
                  className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-white hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-violet-400 to-indigo-400 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    {sessions.user.name?.charAt(0).toUpperCase() || 'U'}
                  </div>
                  <span className="hidden sm:block">{sessions.user.name}</span>
                </Link>
              ) : (
                <div className="text-red-400 text-sm">No user ID found</div>
              )}
              
              {/* Logout Button */}
              <LogoutButton />
            </>
          ) : (
            <LoginButton />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;