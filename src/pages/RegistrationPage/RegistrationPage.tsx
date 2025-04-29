import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { useChat } from '../../store';

import { Paths } from '../../enums';

export const RegistrationPage = () => {
  const [userName, setUserName] = useState('');
  const currentUser = useChat(state => state.user);
  const setNewUser = useChat(state => state.setUser);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setNewUser(userName);
    navigate(Paths.CHAT_LIST);
  };

  useEffect(() => {
    if (currentUser !== '') {
      navigate(Paths.CHAT_LIST);
    }
  });

  return (
    <section className="self-center justify-self-center p-4 border border-black">
      <form
        onSubmit={handleSubmit}
        action="submit"
        className="flex flex-col gap-3 justify-center items-center"
      >
        <h1>Enter you'r user name:</h1>
        <input
          onChange={event => setUserName(event.target.value)}
          value={userName}
          className="border border-black"
          type="text"
          name="userName"
        />
        <button className="border border-black w-[100%]" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};
