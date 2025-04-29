import cn from 'classnames';
import React from 'react';

const ZHEKA_PYZUR = '}I{EKA ny3blPb';

interface Props {
  author: string;
  message: string;
}

export const Message: React.FC<Props> = ({ author, message }) => {
  return (
    <li
      className={cn('p-3 border border-blue-950 w-[fit-content] rounded-md', {
        'self-end': author === ZHEKA_PYZUR
      })}
    >
      <h4>
        Author: <span className='font-bold'>{author}</span>
      </h4>

      <p>{message}</p>
    </li>
  );
};
