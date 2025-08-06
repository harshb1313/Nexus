import { Request, Response } from 'express'
import Post from '../models/postSchema'


export const createPost = async (req: Request, res: Response) => {
    try {
        const { title,
            founder,
            content,
            tags,
            authorId,
            authorName,
            authorImage } = req.body

        const newPost = new Post({
            title,
            founder,
            content,
            tags,
            authorId,
            authorName,
            authorImage
        })
        const saved = await newPost.save()
        res.status(200).json(saved)
    } catch (error) {
        console.error("Error creating story:", error);
        res.status(500).json({ error: 'Failed to create story' });
    }

}

export const getPosts = async (req: Request, res: Response) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 })//newest first
        res.status(200).json(posts);
    } catch (error) {
        console.log("error :", error)
    }
}

export const getPostById = async (req: Request, res: Response) => {
    const { id } = req.params
    const post = await Post.findById(id)
    res.status(200).json(post)
}

export const deletePost = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const remove = await Post.findById(id)
        if (!remove) {
            return res.status(404).json({ message: "Post Not Found" }) // Fixed return
        }
        await Post.findByIdAndDelete( id )
        res.status(200).json({ 'message': 'post deleted' })
    } catch (error) {
        res.status(500).json({ 'message': 'cant Post not deleted', error })
    }

}