import { useParams } from 'react-router';
import dayjs from 'dayjs';

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

  const botReply = () => {
    return setTimeout(() => {
      handleNewMessage({
        author: 'bot-1',
        message:
          'Interesting thought, maybe some day I`ll answer you a bit deeper...',
        chatId,
        date: dayjs().format('YYYY-MM-DD HH:mm:ss')
      });
    }, 1 * 1000);
  };

  const botSpam = () => {
    setTimeout(() => {
      handleNewMessage({
        author: 'bot-1',
        message:
          'Hey body! I am your dummy assistant who can only spam you a single message once in a few minutes! Excuse me but you cant turn me off((( Only if you reload or close this page, its a chance to avoid spam in this chat. Wish you good day!',
        chatId,
        date: dayjs().format('YYYY-MM-DD HH:mm:ss')
      });
    }, 1 * 1000);

    setInterval(() => {
      handleNewMessage({
        author: 'bot-1',
        chatId,
        message: 'I am still here :)',
        date: dayjs().format('YYYY-MM-DD HH:mm:ss')
      });
    }, 1 * 60000);
  };

  if (chatId === 'bot-1' && !spamStatus) {
    switchSpamStatus();
    botSpam();
  }

  return (
    <>
      <ChatField messages={filteredMessages} user={user} />
      <ChatInputs chatId={chatId} author={user} botReply={botReply} />
    </>
  );
};
