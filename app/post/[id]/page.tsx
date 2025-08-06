import React from 'react'
import RemovePost from '@/app/components/deletePost'

interface PostId {
    params: {
        id: string
    }
}

const fetchPost = async (id: string) => {
    try {
        const res = await fetch(`http://localhost:5000/api/posts/${id}`, {
            cache: 'no-store'
        })

        if (!res.ok) {
            throw new Error(`Failed to fetch post: ${res.status}`)
        }

        return res.json()
    } catch (error) {
        console.error('Error fetching post:', error)
        return null
    }

}

const Page = async ({ params }: PostId) => {
    const post = await fetchPost((await params).id)
    // console.log('Post object:', post)
    // console.log('Post keys:', Object.keys(post))

    if (!post) {
        return (
            <main className="max-w-3xl mx-auto p-6">
                <h1 className="text-2xl font-bold text-red-600">Post not found</h1>
                <p>The post youre looking for doesnt exist or couldnt be loaded.</p>
            </main>
        )
    }

    return (
        <main className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <p className="text-gray-600 text-sm mb-2">
                By {post.authorName} · {new Date(post.createdAt).toLocaleDateString()}
            </p>

            <div className="prose max-w-none">{post.content}</div>

            <div className="mt-6">
                <RemovePost
                    postId={post._id}
                    postAuthorId={post.authorId} // This is the email
                />
            </div>
        </main>
    )
}

export default Page