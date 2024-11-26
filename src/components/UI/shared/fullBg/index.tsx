import s from './style.module.scss';
import { TFullBg } from './types.ts';
import clsx from 'clsx';
import { FC } from 'react';

export const FullBg: FC<TFullBg> = ({ children, className }) => {
  return <div className={clsx(s.fullBg, className)}>{children}</div>;
};
