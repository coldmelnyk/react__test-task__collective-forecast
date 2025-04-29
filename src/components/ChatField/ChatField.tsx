import { Message } from '..';

import { MessageType } from '../../types';

interface Props {
  messages: MessageType[];
  user: string;
}

export const ChatField = ({ messages, user }: Props) => {
  return (
    <section className="p-4 min-h-[inherit] overflow-scroll max-h-[80dvh] border border-black rounded-md">
      <ul className="flex flex-col gap-3">
        {messages.map((message, i) => (
          <Message
            key={i}
            author={message.author}
            message={message.message}
            user={user}
          />
        ))}
      </ul>
    </section>
  );
};
