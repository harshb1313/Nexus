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

export const getPosts=async(req:Request,res:Response)=>{
try {
   const posts = await Post.find().sort({createdAt:-1})//newest first
   res.status(200).json(posts);
} catch (error) {
    console.log("error :", error)
}
}

export const getPostById = async(req:Request,res:Response)=>{
    const {id} = req.params
    const post = await Post.findById(id)
    res.status(200).json(post)
}