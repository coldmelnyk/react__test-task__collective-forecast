import { MessageType } from '../types';

export const getMessages = (chatId: string, messages: MessageType[]) => {
  return messages.filter(message => message.chatId === chatId);
};
