import React from 'react';
import cn from 'classnames';

interface Props {
  author: string;
  message: string;
  user: string;
}

export const Message: React.FC<Props> = ({ author, message, user }) => {
  return (
    <li
      className={cn('p-3 border border-blue-950 w-[fit-content] rounded-md max-w-[80%]', {
        'self-end': author === user
      })}
    >
      <h4>
        Author: <span className="font-bold uppercase">{author}</span>
      </h4>

      <p>{message}</p>
    </li>
  );
};
