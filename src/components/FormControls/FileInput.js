import React from 'react';
import { Field } from 'redux-form';
import {
  getStateValidateContainer,
  getStateValidateInput,
  validateFileInput
} from '../../helpers/form.helper';
import ValidateMessage from './ValidateMessage';

export const renderFileInput = ({
                                  input, className, label, type, value, handleOnChange,
                                  meta: { touched, error, warning }
                                }) => (
  <div
    className={`${className} ${getStateValidateContainer(touched, error, warning)} pointer`}>
    <i className="fa fa-paperclip pointer"/>
    &nbsp; {label}
    <input
      {...input}
      className={`form-control ${getStateValidateInput(touched, error, warning)} uploadButton`}
      placeholder={label}
      type={type}
      value={value}
      onChange={(e) => {
        input.onBlur(e);
        const err = validateFileInput(e.target.files);
        if (err === undefined) {
          handleOnChange(e);
        }
        input.onChange(e);
      }
      }
    />
    <ValidateMessage
      touched={touched}
      error={error}
      warning={warning}
      label={label}
    />
  </div>
);

const FileInput = ({
                     name, type, label, validate, className, handleOnChange
                   }) => (<Field
  name={name}
  type={type}
  label={label}
  validate={validate}
  component={renderFileInput}
  className={className}
  handleOnChange={handleOnChange}
/>);
export default FileInput;
