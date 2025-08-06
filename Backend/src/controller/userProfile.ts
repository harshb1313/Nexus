import Post from "../models/postSchema";
import { Request, Response } from 'express'

export const userProfile = async (req: Request, res: Response) => {
    const { id } = req.params
    const posts = await Post.find({ authorId: id }).sort({ createdAt: -1 })
    res.status(200).json(posts)
}
