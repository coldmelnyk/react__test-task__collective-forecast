import React, { useEffect } from 'react';
import cn from 'classnames';

interface Props {
  author: string;
  message: string;
  user: string;
  isLast: boolean;
  lastElement: React.RefObject<HTMLLIElement>;
}

export const Message: React.FC<Props> = ({
  author,
  message,
  user,
  isLast,
  lastElement
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
        'p-3 border border-blue-950 w-[fit-content] rounded-md max-w-[80%]',
        {
          'self-end': author === user
        }
      )}
    >
      <h4>
        Author: <span className="font-bold uppercase">{author}</span>
      </h4>

      <p>{message}</p>
    </li>
  );
};
