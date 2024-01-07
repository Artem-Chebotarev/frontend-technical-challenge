import { ForwardedRef, InputHTMLAttributes, ReactNode, forwardRef } from 'react';
import { classNames } from '../../lib/helpers/classNames/classNames';
import { TestProps } from '../../types/tests';

import cls from './Select.module.scss';

interface ISelectProps extends InputHTMLAttributes<HTMLSelectElement>, TestProps {
  /**
   * Children of select
   */
  children: ReactNode;
  /**
   * Additional styles for the field
   */
  className?: string;
}

export const Select = forwardRef((props: ISelectProps, ref: ForwardedRef<HTMLSelectElement>) => {
  const {
    children,
    id,
    name,
    required,
    'data-testid': dataTestId = 'Select',
    className,
    ...otherProps
  } = props;

  return (
    <select
      {...otherProps}
      ref={ref}
      className={classNames(cls.Select, {}, [className])}
      id={id}
      name={name}
      data-testid={`${dataTestId}`}
      required={required}
    >
      {children}
    </select>
  );
});
