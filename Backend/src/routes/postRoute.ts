import express from 'express';
import { createPost, getPostById } from '../controller/postController';
import { getPosts, deletePost } from '../controller/postController';

const router = express.Router();

router.post('/api/post', createPost);

router.get('/api/posts', getPosts)

router.get('/api/posts/:id', getPostById)

router.delete('/api/delete/:id', deletePost)

export default router;