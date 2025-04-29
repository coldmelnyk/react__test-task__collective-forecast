import { useParams } from 'react-router';

import { ChatField, ChatInputs } from '..';

import { useChat } from '../../store';

import { getMessages } from '../../utils/getMessages';

export const Chat = () => {
  const chatId = useParams().chatId || '';
  const user = useChat(state => state.user);
  const messages = useChat(state => state.messages);

  const filteredMessages = getMessages(chatId, messages);

  return (
    <>
      <ChatField messages={filteredMessages} user={user} />
      <ChatInputs />
    </>
  );
};
