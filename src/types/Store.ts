import { Message } from '.';

export interface Store {
  user: string;
  messages: Message[];
  setUser: (newUser: string) => void;
  setMessage: (newMessage: Message) => void;
  uploadMessages: (messages: Message[]) => void;
}
