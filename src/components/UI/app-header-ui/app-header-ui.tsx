import { FC } from 'react';
import s from './app-header.module.scss';

export const AppHeaderUI: FC = () => {
  return (
    <>
      <header className={s.header}>
        <div>Header</div>
      </header>
    </>
  );
};
