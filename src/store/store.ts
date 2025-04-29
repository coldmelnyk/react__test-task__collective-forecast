import { create } from 'zustand';

import { Store } from '../types';

export const useChat = create<Store>(set => ({
  user: '',
  messages: [],
  setUser: newUser =>
    set(() => ({
      user: newUser
    })),
  setMessage: newMessage =>
    set(state => ({
      messages: [...state.messages, newMessage]
    })),
  uploadMessages: messages =>
    set(() => ({
      messages: [...messages]
    }))
}));
