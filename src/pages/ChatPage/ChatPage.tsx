import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { Chat } from '../../components';

import { useChat } from '../../store';

import { Paths } from '../../enums';

export const ChatPage = () => {
  const currentUser = useChat(state => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser === '') {
      navigate(Paths.HOME);
    }
  });

  return <Chat />;
};
