import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config(); 

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

export const getConversations = async (req, res) => {
  const { data, error } = await supabase.from('conversations').select('*');
  if (error) return res.status(500).send(error.message);
  res.json(data);
};
