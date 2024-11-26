import { ReactNode } from 'react';

export type ButtonProps = {
  type?: ButtonType;
  color?: ButtonColor;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  children?: ReactNode;
  className: string;
};

export enum ButtonType {
  button = 'button',
  submit = 'submit',
}

export enum ButtonColor {
  primary = 'primary',
  secondary = 'secondary',
}
