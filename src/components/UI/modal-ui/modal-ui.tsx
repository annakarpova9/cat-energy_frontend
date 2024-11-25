import { FC } from 'react';
import s from './modal.module.scss';
import { TModalUIProps } from '@ui/modal-ui/type.ts';

export const ModalUI: FC<TModalUIProps> = ({ title, onClose, children }) => {
  return (
    <>
      <div className={s.modal}>{title}</div>
      <div>{children}</div>
      <button onClick={onClose}></button>
    </>
  );
};
