import express from 'express';
import { getConversations } from '../controllers/conversationController.js';
// // import { requireSession } from '@clerk/clerk-sdk-node';

const router = express.Router();

router.get('/conversations', getConversations);

export default router;
