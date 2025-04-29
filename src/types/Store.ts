import { MessageType } from '.';

export interface Store {
  user: string;
  messages: MessageType[];
  setUser: (newUser: string) => void;
  setMessage: (newMessage: MessageType) => void;
  uploadMessages: (messages: MessageType[]) => void;
}
