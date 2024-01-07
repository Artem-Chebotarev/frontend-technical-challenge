import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import { classNames } from '../../lib/helpers/classNames/classNames';
import { TestProps } from '../../types/tests';

import cls from './Input.module.scss';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement>, TestProps {
  /**
   * Additional styles for input
   */
  className?: string;
}

export const Input = forwardRef((props: IInputProps, ref: ForwardedRef<HTMLInputElement>) => {
  const {
    id,
    name,
    type = 'text',
    required,
    defaultValue,
    placeholder,
    'data-testid': dataTestId = 'Input',
    className,
    ...otherProps
  } = props;

  return (
    <input
      {...otherProps}
      ref={ref}
      className={classNames(cls.Input, {}, [className])}
      name={name}
      type={type}
      id={id}
      defaultValue={defaultValue}
      required={required}
      placeholder={placeholder}
      data-testid={`${dataTestId}`}
    />
  );
});
