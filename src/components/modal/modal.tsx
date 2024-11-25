import { FC } from 'react';
import { ModalUI } from '@ui/modal-ui';
import { TModalProps } from './type.ts';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modals');

export const Modal: FC<TModalProps> = ({ title, onClose, children }) => {
  return createPortal(
    <ModalUI title={title} onClose={onClose}>
      {children}
    </ModalUI>,
    modalRoot as HTMLDivElement
  );
};
