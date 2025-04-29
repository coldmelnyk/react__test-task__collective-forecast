import { create } from 'zustand';

import { MessageType, Store } from '../types';

const initialMessages: MessageType[] = [
  {
    chatId: 'initial',
    author: 'coldmelnyk',
    message: 'Yo. Can I get 1 California Urkle????? BWAY 780$',
    date: '2025-04-26 22:17:47'
  },
  {
    chatId: 'initial',
    author: 'coldmelnyk',
    message: 'HEY?????',
    date: '2025-04-26 22:32:11'
  },
  {
    chatId: 'initial',
    author: '}I{EKA PYZUR`',
    message: 'Not now.',
    date: '2025-04-26 22:35:02'
  }
];

export const useChat = create<Store>(set => ({
  user: '',
  messages: initialMessages,
  spamStatus: false,
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
    })),
  switchSpamStatus: () =>
    set(state => ({
      spamStatus: !state.spamStatus
    }))
}));
