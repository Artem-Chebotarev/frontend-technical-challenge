import { ForwardedRef, InputHTMLAttributes, ReactNode, forwardRef } from 'react';
import { classNames } from '../../lib/helpers/classNames/classNames';
import { TestProps } from '../../types/tests';

import cls from './FormSelect.module.scss';

const DEFAULT_ERROR_MSG = 'Please complete this required field.';

interface IFormSelectProps extends InputHTMLAttributes<HTMLSelectElement>, TestProps {
  children: ReactNode;
  /**
   * Label of the field
   */
  label: string;
  /**
   * Error of the field
   */
  error?: boolean;
  /**
   * Error message of the field
   */
  errorMsg?: string;
  /**
   * Additional styles for the field
   */
  className?: string;
}

export const FormSelect = forwardRef(
  (props: IFormSelectProps, ref: ForwardedRef<HTMLSelectElement>) => {
    const {
      children,
      label,
      id,
      name,
      required,
      error,
      errorMsg = DEFAULT_ERROR_MSG,
      'data-testid': dataTestId = 'FormSelect',
      className,
      ...otherProps
    } = props;

    return (
      // Field Container
      <div className={classNames(cls.FieldContainer, {}, [className])}>
        {/* Field Label */}
        <label className={cls.FieldLabel} htmlFor={id}>
          {label}
          {required && <span aria-hidden>*</span>}
        </label>

        {/* Field Select */}
        <select
          {...otherProps}
          ref={ref}
          className={cls.FieldSelect}
          id={id}
          name={name}
          data-testid={`${dataTestId}`}
          required={required}
        >
          {children}
        </select>

        {/* Field Error */}
        {error && (
          <span className={cls.FieldError} data-testid='FieldError'>
            {errorMsg}
          </span>
        )}
      </div>
    );
  },
);
