import express from 'express';
const app = express();
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import conversationRoutes from './routes/conversationRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import { clerkMiddleware } from './middleware/authMiddleware.js';

dotenv.config();

// const app = express();

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(clerkMiddleware);

app.use('/api', conversationRoutes);
app.use('/api', messageRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);  
});
app.get('/', (req, res) => {
  res.send('Server is running');
});
export default app;








// import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_KEY,
// });

// async function main() {
//   const completion = await openai.chat.completions.create({
//     messages: [{ role: "system", content: "You are a helpful assistant." }],
//     model: "gpt-4o-mini",
//   });

//   console.log(completion.choices[0]);
// }

// main();