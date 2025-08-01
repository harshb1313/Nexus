'use client';
import Link from 'next/link';
import React from 'react'

const SearchFormReset = () => {
    const query = "test";
    const reset = () => {
        const form = document.querySelector('.search-form') as HTMLFormElement
        if(form) form.reset()
    }
  return (
    <div>
       <button type='reset'  onClick={reset} className="flex items-center gap-2 px-4 py-2  bg-white/30 hover:bg-white/40 focus:bg-white/40 backdrop-blur-sm text-white p-3 rounded-xl transition-all duration-200 hover:scale-105 focus:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/50 z-20 group/btn">
        <Link href='/'>X</Link>
      </button>
    </div>
  )
}

export default SearchFormReset
