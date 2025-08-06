import express from 'express'
import { userProfile } from '../controller/userProfile';

const Router = express.Router();

Router.get('/api/user-profile/:id',userProfile)

export default Router