import React, { useEffect } from 'react';
import cn from 'classnames';

interface Props {
  author: string;
  message: string;
  user: string;
  isLast: boolean;
  lastElement: React.RefObject<HTMLLIElement>;
  date: string;
}

export const Message: React.FC<Props> = ({
  author,
  message,
  user,
  isLast,
  lastElement,
  date
}) => {
  useEffect(() => {
    if (isLast && lastElement.current) {
      lastElement.current.scrollIntoView({
        block: 'center',
        behavior: 'smooth'
      });
    }
  }, [isLast, lastElement]);

  return (
    <li
      ref={lastElement}
      className={cn(
        'p-3 flex flex-col gap-2 border border-blue-950 w-[fit-content] rounded-md max-w-[80%]',
        {
          'self-end': author === user
        }
      )}
    >
      <div>
        <h4>
          Author: <span className="font-bold uppercase">{author}</span>
        </h4>

        <p>{message}</p>
      </div>

      <p className="self-end italic font-light text-xs">{date}</p>
    </li>
  );
};
