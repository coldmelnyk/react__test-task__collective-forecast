import { MessageType } from '.';

export interface Store {
  user: string;
  messages: MessageType[];
  spamStatus: boolean;
  setUser: (newUser: string) => void;
  setMessage: (newMessage: MessageType) => void;
  uploadMessages: (messages: MessageType[]) => void;
  switchSpamStatus: () => void;
}
