import { Outlet } from 'react-router';

import { BasicLayout } from './components/BasicLayout';

export default function App() {
  return (
    <BasicLayout>
      <Outlet />
    </BasicLayout>
  );
}
