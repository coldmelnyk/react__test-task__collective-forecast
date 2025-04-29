import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

import { ChatPage, ChatsListPage, RegistrationPage } from './pages';

import App from './App';

import { Paths } from './enums';

export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Paths.HOME} element={<App />}>
          <Route index element={<RegistrationPage />} />

          <Route path={Paths.CHAT_LIST} element={<ChatsListPage />} />

          <Route path={Paths.CHAT} element={<ChatPage />} />
        </Route>
        <Route path={Paths.NOT_FOUND} element={<Navigate to={Paths.HOME} />} />
      </Routes>
    </BrowserRouter>
  );
};
