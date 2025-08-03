import React from 'react'
import { StartupCardProps } from './StartupCard'
import StartupCard from './StartupCard'

export const getData = async () => {
    const res = await fetch("http://localhost:5000/api/posts", {
        cache: 'no-store',
    })
    return res.json()
}

const FetchPosts = async () => {
    const post = await getData()
    return (
        <main>
            <h1>EXPLORE STORIES</h1>
            <div>
                {post.map((post: StartupCardProps['post']) => (<StartupCard key={post._id!} post={post} />))}
            </div>
        </main>
    )
}

export default FetchPosts
