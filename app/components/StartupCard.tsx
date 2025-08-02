
import React from "react";
import { Zap, ArrowUpRight, Eye, Calendar, Tag } from "lucide-react";

type StartupCardProps = {
  name: string;
  description: string;
  views?: string;
  category?: string;
  createdAt: string;
};

const StartupCard = ({ name, description, views, createdAt, category,}: StartupCardProps) => {
  return (
    <div className="group relative bg-gradient-to-br from-white to-gray-50/50 dark:from-zinc-900 dark:to-zinc-800/50 rounded-3xl border border-gray-200/60 dark:border-zinc-700/60 p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 max-w-md w-full backdrop-blur-sm overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
      
      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Header with animated icon */}
        <div className="flex items-center gap-4 mb-4">
          <div className="relative">
            <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 p-3 rounded-2xl text-white shadow-lg group-hover:shadow-indigo-500/25 transition-all duration-300 group-hover:scale-110">
              <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
              {name}
            </h2>
          </div>
        </div>

        {/* Description with better typography */}
        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed line-clamp-3 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
          {description}
        </p>

        {/* Metadata grid */}
        <div className="space-y-3 mb-6">
          {category && (
            <div className="flex items-center gap-2 text-sm">
              <Tag className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span className="text-gray-500 dark:text-gray-400">Category:</span>
              <span className="font-semibold text-gray-700 dark:text-gray-300 bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded-lg">
                {category}
              </span>
            </div>
          )}
          
          {views && (
            <div className="flex items-center gap-2 text-sm">
              <Eye className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-gray-500 dark:text-gray-400">Views:</span>
              <span className="font-semibold text-gray-700 dark:text-gray-300">
                {views}
              </span>
            </div>
          )}
          
          {createdAt && (
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span className="text-gray-500 dark:text-gray-400">Posted:</span>
              <span className="font-semibold text-gray-700 dark:text-gray-300">
                {createdAt}
              </span>
            </div>
          )}
        </div>

        {/* Enhanced CTA button */}
        
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-pink-400/10 to-red-400/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </div>
  );
};
export default StartupCard