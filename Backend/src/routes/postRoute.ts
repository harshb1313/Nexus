import express from 'express';
import { createPost } from '../controller/postController';

const router = express.Router();

router.post('/api/post', createPost);

export default router;