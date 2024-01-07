import { ReactNode } from 'react';
import { classNames } from '../../lib/helpers/classNames/classNames';
import { TestProps } from '../../types/tests';

import cls from './Field.module.scss';

const DEFAULT_ERROR_MSG = 'Please complete this required field.';

interface IFieldProps extends TestProps {
  /**
   * Children of field
   */
  children: ReactNode;
  /**
   * Label of the field
   */
  label: string;
  /**
   * htmlFor property of the label
   */
  htmlFor: string;
  /**
   * Error of the field
   */
  error?: boolean;
  /**
   * Error message of the field
   */
  errorMsg?: string;
  /**
   * Required property to show required text of the labe;
   */
  required?: boolean;
  /**
   * Additional styles for the field
   */
  className?: string;
}

export const Field = (props: IFieldProps) => {
  const {
    children,
    label,
    htmlFor,
    required,
    error,
    errorMsg = DEFAULT_ERROR_MSG,
    'data-testid': dataTestId = 'Field',
    className,
  } = props;

  return (
    // Field Container
    <div className={classNames(cls.FieldContainer, {}, [className])} data-testid={`${dataTestId}`}>
      {/* Field Label */}
      <label className={cls.FieldLabel} htmlFor={htmlFor}>
        {label}
        {required && <span aria-hidden>*</span>}
      </label>

      {/* Field Children */}
      {children}

      {/* Field Error */}
      {error && (
        <span className={cls.FieldError} data-testid='FieldError'>
          {errorMsg}
        </span>
      )}
    </div>
  );
};
