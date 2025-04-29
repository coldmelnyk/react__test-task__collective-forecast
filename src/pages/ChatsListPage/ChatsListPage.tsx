import { NavLink } from 'react-router';

import { useChat } from '../../store';

import { MessageType } from '../../types';

export const ChatsListPage = () => {
  const currentUser = useChat(state => state.user);
  const messages = useChat(state => state.messages);

  const availableChats = messages.reduce(
    (acc: string[], message: MessageType) => {
      if (
        message.author === currentUser &&
        !acc.some(id => id === message.chatId)
      ) {
        acc.push(message.chatId);
      }

      return acc;
    },
    []
  );

  return (
    <section className="flex flex-col gap-3">
      <h1>Available chats:</h1>

      <ul className="flex gap-3">
        {availableChats.map(id => (
          <li className="p-4 border border-black block w-fit" key={id}>
            <NavLink to={`/chat/${id}`}>{id}</NavLink>
          </li>
        ))}
        <li className="p-4 border border-black block w-fit">
          <NavLink to={`/chat/bot-1`}>Bot-1</NavLink>
        </li>
      </ul>
    </section>
  );
};
