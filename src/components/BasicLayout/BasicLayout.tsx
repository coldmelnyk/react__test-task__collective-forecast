import { ReactNode } from 'react';

interface BasicLayoutProps {
  children: ReactNode;
}

export const BasicLayout = ({ children }: BasicLayoutProps) => {
  return (
    <main className="min-h-[100dvh] flex items-center justify-center">
      <div className="min-h-[80dvh] border border-black w-[90%] rounded-md p-4 flex flex-col justify-between gap-3">
        {children}
      </div>
    </main>
  );
};
