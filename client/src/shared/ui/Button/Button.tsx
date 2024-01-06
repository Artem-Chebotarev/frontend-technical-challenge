import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Mods, classNames } from '../../lib/helpers/classNames/classNames';

import cls from './Button.module.scss';

export enum ButtonTheme {
  ACTIVE_GREEN = 'activeGreen',
  DISABLED_GREY = 'disabledGrey',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Theme of the button. It is responsible for the visual styles
   */
  theme?: ButtonTheme;
  /**
   * Children of the button
   */
  children?: ReactNode;
  /**
   * Increases the button's width by the entire available width
   */
  fullWidth?: boolean;
  /**
   * Additional styles for the button
   */
  className?: string;
}

export const Button = (props: IButtonProps) => {
  const {
    className,
    children,
    theme = ButtonTheme.ACTIVE_GREEN,
    disabled,
    fullWidth,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.disabled]: disabled,
    [cls.fullWidth]: fullWidth,
  };

  return (
    <button
      {...otherProps}
      type='button'
      className={classNames(cls.Button, mods, [className, cls[theme]])}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
};
