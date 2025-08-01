import React from 'react'
import { ArrowRight, Search } from 'lucide-react'
import Form from 'next/form'
import SearchFormReset from './SearchFormReset'

const SearchForm = ({query}:{query?:'string'}) => {
    
    
    return (
        <div className="relative group">
            {/* Glass Background with Enhanced Styling */}
            <div className="absolute inset-0 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 group-hover:border-white/50 group-focus-within:border-white/60 transition-all duration-300 group-hover:shadow-xl group-focus-within:shadow-2xl group-hover:bg-white/25"></div>

            <Form action="/" className="search-form relative z-10">
                <div className="relative flex items-center">
                    {/* Search Icon */}
                    <Search className="absolute left-4 w-5 h-5 text-white/70 group-hover:text-white group-focus-within:text-white transition-colors duration-200 z-20" />

                    {/* Input Field */}
                    <input
                        type="text"
                        name="query"
                        defaultValue={query}
                        placeholder="Search startup stories, topics, or entrepreneurs..."
                        className="w-full pl-12 pr-20 py-4 bg-transparent text-white placeholder-white/70 text-lg font-medium focus:outline-none focus:placeholder-white/50 transition-all duration-200 relative z-10"
                    />

                    {/* Reset Button (when query exists) */}
                    
                        <div className="absolute right-16 z-20">
                            {query && query.trim() && <SearchFormReset />}
                            
                        </div>
                

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="absolute right-2 bg-white/30 hover:bg-white/40 focus:bg-white/40 backdrop-blur-sm text-white p-3 rounded-xl transition-all duration-200 hover:scale-105 focus:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/50 z-20 group/btn"
                    >
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
                    </button>
                </div>
            </Form>
        </div>
    )
}

export default SearchForm
