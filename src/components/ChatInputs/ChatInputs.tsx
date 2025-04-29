import { useState } from 'react';
import dayjs from 'dayjs';

import { useChat } from '../../store';

import { MessageType } from '../../types';

interface Props {
  chatId: string;
  author: string;
  botReply: () => number;
}

export const ChatInputs = ({ chatId, author, botReply }: Props) => {
  const [newMessage, setNewMessage] = useState<MessageType>({
    chatId,
    author,
    message: '',
    date: dayjs().format('YYYY-MM-DD HH:mm:ss')
  });
  const handleNewMessage = useChat(state => state.setMessage);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    handleNewMessage(newMessage);
    setNewMessage({
      chatId,
      author,
      message: '',
      date: dayjs().format('YYYY-MM-DD HH:mm:ss')
    });

    if (chatId === 'bot-1') {
      botReply();
    }
  };

  return (
    <section>
      <form
        onSubmit={handleSubmit}
        className="flex justify-between items-center gap-3"
        action="submit"
      >
        <input
          value={newMessage.message}
          onChange={event =>
            setNewMessage(state => {
              return {
                ...state,
                message: event.target.value
              };
            })
          }
          className="px-3 py-2 border border-black rounded-md w-[100%]"
          type="text"
          name="message-text"
        />
        <button
          className="px-3 py-2 border border-black rounded-md"
          type="submit"
        >
          Send
        </button>
      </form>
    </section>
  );
};
