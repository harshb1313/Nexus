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