'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const RemovePost = ({ postId, postAuthorId }: { postId: string, postAuthorId: string }) => {
  const { data: session } = useSession()
  const router = useRouter()
  const [isDeleting, setIsDeleting] = useState(false)
  
  // Compare session email with postAuthorId (which is actually an email)
  const isAuthor = session?.user?.email === postAuthorId;
  
  // console.log('Session email:', session?.user?.email)
  // console.log('Post author ID (email):', postAuthorId)
  // console.log('Is author?', isAuthor)

  const handleDelete = async () => {
    const confirmation = window.confirm("Are you sure you want to delete this post?")
    if (!confirmation) return;
    
    setIsDeleting(true)
    
    try {
      const res = await fetch(`http://localhost:5000/api/delete/${postId}`, {
        method: 'DELETE'
      })
      
      if (res.ok) {
        // console.log('Post deleted successfully')
        router.push(`/userprofile/${session?.user?.email}`)
      } else {
        const errorData = await res.text()
        console.error('Delete failed:', errorData)
        alert("Failed to delete post. Please try again.")
      }
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Something went wrong. Please check your connection and try again.");
    } finally {
      setIsDeleting(false)
    }
  }

  if (!isAuthor) return null

  return (
    <button 
      onClick={handleDelete} 
      disabled={isDeleting}
      className={`px-4 py-2 rounded text-white transition ${
        isDeleting 
          ? 'bg-gray-400 cursor-not-allowed' 
          : 'bg-red-600 hover:bg-red-700'
      }`}
    >
      {isDeleting ? 'Deleting...' : 'Delete'}
    </button>
  )
}

export default RemovePost