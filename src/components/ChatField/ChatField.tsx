import { Message } from '..';

export const ChatField = () => {
  return (
    <section className="p-4 min-h-[inherit] overflow-scroll max-h-[80dvh] border border-black rounded-md">
      <ul className="flex flex-col gap-3">
        <Message
          author="coldmelnyk"
          message="Yo. Can I get 1 California Urkle????? BWAY 780$"
        />
        <Message author="}I{EKA ny3blPb" message="Not now." />
      </ul>
    </section>
  );
};
