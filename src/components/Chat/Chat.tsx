import { useParams } from 'react-router';

import { ChatField, ChatInputs } from '..';

import { useChat } from '../../store';

import { getMessages } from '../../utils/getMessages';

export const Chat = () => {
  const chatId = useParams().chatId || '';
  const user = useChat(state => state.user);
  const messages = useChat(state => state.messages);
  const handleNewMessage = useChat(state => state.setMessage);
  const spamStatus = useChat(state => state.spamStatus);
  const switchSpamStatus = useChat(state => state.switchSpamStatus);

  const filteredMessages = getMessages(chatId, messages);

  const botSpam = () => {
    setTimeout(() => {
      handleNewMessage({
        author: 'bot-1',
        message:
          'Hey body! I am your dummy assistant who can only spam you a single message once in a few minutes! Excuse me but you cant turn me off((( Only if you reload or close this page, its a chance to avoid spam in this chat. Wish you good day!',
        chatId
      });
    }, 1 * 1000);

    setInterval(() => {
      handleNewMessage({
        author: 'bot-1',
        chatId,
        message: 'I am still here :)'
      });
    }, 3 * 60000);
  };

  if (chatId === 'bot-1' && !spamStatus) {
    switchSpamStatus();
    botSpam();
  }

  return (
    <>
      <ChatField messages={filteredMessages} user={user} />
      <ChatInputs chatId={chatId} author={user} />
    </>
  );
};
