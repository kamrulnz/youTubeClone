import express from 'express';
import {signup} from '../controllers/auth.js';

const router = express.Router();

// CREATE USER
router.post('/signup', signup);

// SIGN IN
router.post('/sigin', );

// GOOGLE AUTHENTICATION
router.post('/google', );

export default router ;