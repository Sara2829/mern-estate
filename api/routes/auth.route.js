import express from 'express';
import { signup } from '../controllers/auth.controller.js';
const router = express.Router();


router.post('/signup', signup);


export default router;

//signup is the endpoint that the user will hit to create a new user.