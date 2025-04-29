import { useRef } from 'react';
import { Message } from '..';

import { MessageType } from '../../types';

interface Props {
  messages: MessageType[];
  user: string;
}

export const ChatField = ({ messages, user }: Props) => {
  const lastElementIndex = messages.length ? messages.length - 1 : null;

  const lastElement = useRef<HTMLLIElement>(null);

  return (
    <section className="p-4 min-h-[inherit] overflow-scroll max-h-[80dvh] border border-black rounded-md">
      <ul className="flex flex-col gap-3">
        {messages.map((message, i) => (
          <Message
            key={i}
            author={message.author}
            message={message.message}
            user={user}
            isLast={lastElementIndex === i}
            lastElement={lastElement}
          />
        ))}
      </ul>
    </section>
  );
};
