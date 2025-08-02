import { ArrowRight } from 'lucide-react';
import SearchForm from '@/app/components/SearchForm'
import StartupCard from '../components/StartupCard';

export default async function StartupHero({ searchParams }: { searchParams: Promise<{ query?: 'string' }> }) {
  const query = (await searchParams).query
  const posts = [{ _createdAt:'yesterday', _views:'55',_id:1,_author:{id:1},_image:'',description:"This is description",category:"Robots",title:"weRobots"}]
  return (
    <>
      <section className="relative min-h-screen bg-emerald-500 overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}></div>

        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 bg-emerald-600/20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
          <div className="text-center">
            {/* Badge */}


            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
              Share Your Startup
              <br />
              <span className="text-emerald-100">Journey</span> with the World
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-6 leading-relaxed drop-shadow-sm">
              Connect with fellow entrepreneurs, share your experiences, and discover the stories behind successful startups. Build your audience and grow your network.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <SearchForm query={query} />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button className="group inline-flex items-center space-x-2 bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 active:scale-95 active:translate-y-0">
                <span className="group-hover:translate-x-1 transition-transform duration-200">Start Writing</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <button className="group inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 border border-white/30 hover:border-white/50 hover:shadow-lg transform hover:scale-105 hover:-translate-y-1 active:scale-95 active:translate-y-0">
                <span className="group-hover:translate-x-1 transition-transform duration-200">Explore Stories</span>
              </button>
            </div>
          </div>
        </div>
      </section>
<section className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
  <div className="mb-8">
    <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">
      {query ? `Results For "${query}"` : "All Startups"}
    </h1>
    <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
  </div>
  
  {posts && posts.length > 0 ? (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post: StartupPost, id: number) => (
        <StartupCard
          key={post?._id}
          name={post?.title}
          description={post?.description}
          views={post?._views}
          createdAt={post?._createdAt}
          category={post?.category}
          
        />
      ))}
    </div>
  ) : (
    <div className="text-center py-12">
      <div className="text-zinc-400 dark:text-zinc-500 text-6xl mb-4">🔍</div>
      <p className="text-xl text-zinc-600 dark:text-zinc-400 font-medium">
        No startups found.
      </p>
      <p className="text-zinc-500 dark:text-zinc-500 mt-2">
        Try adjusting your search criteria or check back later.
      </p>
    </div>
  )}
</section>
    </>
  );
}