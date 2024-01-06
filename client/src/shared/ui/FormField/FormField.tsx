import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import { classNames } from '../../lib/helpers/classNames/classNames';
import { TestProps } from '../../types/tests';

import cls from './FormField.module.scss';

const DEFAULT_ERROR_MSG = 'Please complete this required field.';

interface IFormFieldProps extends InputHTMLAttributes<HTMLInputElement>, TestProps {
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

export const FormField = forwardRef(
  (props: IFormFieldProps, ref: ForwardedRef<HTMLInputElement>) => {
    const {
      label,
      id,
      name,
      type = 'text',
      required,
      defaultValue,
      placeholder,
      error,
      errorMsg = DEFAULT_ERROR_MSG,
      'data-testid': dataTestId = 'FormField',
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

        {/* Field Input */}
        <input
          {...otherProps}
          ref={ref}
          className={cls.FieldInput}
          name={name}
          type={type}
          id={id}
          defaultValue={defaultValue}
          required={required}
          placeholder={placeholder}
          data-testid={`${dataTestId}`}
        />

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
