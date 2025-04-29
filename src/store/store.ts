import { create } from 'zustand';

import { MessageType, Store } from '../types';

const initialMessages: MessageType[] = [
  {
    chatId: 'initial',
    author: 'coldmelnyk',
    message: 'Yo. Can I get 1 California Urkle????? BWAY 780$'
  },
  {
    chatId: 'initial',
    author: 'coldmelnyk',
    message: 'HEY?????'
  },
  {
    chatId: 'initial',
    author: '}I{EKA ny3blPb',
    message: 'Not now.'
  }
];

export const useChat = create<Store>(set => ({
  user: 'coldmelnyk',
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
