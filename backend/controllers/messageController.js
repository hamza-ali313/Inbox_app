import { createClient } from '@supabase/supabase-js';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
const openaiApiKey = process.env.OPENAI_KEY;
console.log(process.env.OPENAI_KEY)

export const getMessages = async (req, res) => {
  const { thread_id } = req.params;
  const { data, error } = await supabase
    .from('messages')
    .select('*')
    .eq('thread_id', thread_id);

  if (error) return res.status(500).send(error.message);
  res.json(data);
};

export const sendMessage = async (req, res) => {
  const { thread_id, message } = req.body;
  try {
    // const { error } = await supabase
    //   .from('messages')
    //   .insert([{ thread_id: thread_id, sender: 'user', text: message }]);
    // if (error) throw error;
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: message }],
        max_tokens: 100,
      },
      {
        headers: {
          'Authorization': `Bearer ${openaiApiKey}`,
        },
      }
    );
    const aiMessage = response.data.choices[0].text.trim();
    await supabase.from('messages').insert([{ thread_id: thread_id, sender: 'ai', text: aiMessage }]);
    res.json({ aiMessage });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
