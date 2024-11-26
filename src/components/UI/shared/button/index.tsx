import { useMemo } from 'react';
import { ButtonColor, ButtonProps, ButtonType } from './types';
import s from './styles.module.scss';
import clsx from 'clsx';

export const Button = ({
  type = ButtonType.button,
  color = ButtonColor.primary,
  disabled = false,
  loading = false,
  onClick,
  children,
  className,
}: ButtonProps): JSX.Element => {
  const colorClass = useMemo(() => {
    switch (color) {
      case ButtonColor.primary:
        return s.colorPrimary;
      case ButtonColor.secondary:
        return s.colorSecondary;
    }
  }, [color]);

  return (
    <button
      className={clsx(s.button, className, colorClass, disabled && s.disabled)}
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading ? (
        <span className={s.loader} />
      ) : (
        <span className={s.children}>{children}</span>
      )}
    </button>
  );
};
