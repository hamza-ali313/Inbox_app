import express from 'express';
import { getMessages, sendMessage } from '../controllers/messageController.js';
// import { requireSession } from '@clerk/clerk-sdk-node';

const router = express.Router();

router.get('/messages/:threadId', getMessages);
router.post('/sendmessage', sendMessage);

export default router;
