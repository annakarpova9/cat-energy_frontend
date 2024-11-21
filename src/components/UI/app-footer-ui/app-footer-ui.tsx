import { FC } from 'react';
import s from './app-footer.module.scss';

export const AppFooterUI: FC = () => {
  return (
    <>
      <footer className={s.footer}>
        <div>Footer</div>
      </footer>
    </>
  );
};
