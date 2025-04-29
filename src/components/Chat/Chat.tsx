import { ChatField, ChatInputs } from '..';

export const Chat = () => {
  return (
    <main className="min-h-[100dvh] flex items-center justify-center">
      <div className="min-h-[80dvh] border border-black w-[90%] rounded-md p-4 flex flex-col justify-between gap-3">
        <ChatField />

        <ChatInputs />
      </div>
    </main>
  );
};
