import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching messages
export const fetchMessages = createAsyncThunk(
  'messages/fetchMessages',
  async () => {
    const response = await axios.get('http://localhost:3000/api/messages');
    return response.data;
  }
);

// Async thunk for sending a message
export const sendMessage = createAsyncThunk(
  'messages/sendMessage',
  async (message) => {
    await axios.post('http://localhost:3000/api/sendmessage', { message });
    return message;
  }
);

const messageSlice = createSlice({
  name: 'messages',
  initialState: {
    messages: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessages.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.messages = action.payload;
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.messages.push({
          id: state.messages.length + 1,
          text: action.payload,
          sender: 'user'
        });
      });
  }
});

export default messageSlice.reducer;
