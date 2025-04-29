import { ReactNode } from 'react';

import cn from 'classnames';

import { useLocation } from 'react-router';

interface BasicLayoutProps {
  children: ReactNode;
}

export const BasicLayout = ({ children }: BasicLayoutProps) => {
  const path = useLocation().pathname;

  return (
    <main className="min-h-[100dvh] flex items-center justify-center">
      <div
        className={cn({
          'min-h-[80dvh] border border-black w-[90%] rounded-md p-4 flex flex-col justify-between gap-3':
            path.includes('/chat/') || path.includes('/chats')
        })}
      >
        {children}
      </div>
    </main>
  );
};
