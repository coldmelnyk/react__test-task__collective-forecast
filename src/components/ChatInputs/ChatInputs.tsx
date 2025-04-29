export const ChatInputs = () => {
  return (
    <section className="flex justify-between items-center gap-3">
      <input className="px-3 py-2 border border-black rounded-md w-[100%]" type="text" name="message-text" />
      <button className="px-3 py-2 border border-black rounded-md" type="submit">Send</button>
    </section>
  );
};
