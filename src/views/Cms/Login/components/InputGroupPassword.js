import React from 'react';
import { Field } from 'redux-form';
import {
  getStateValidateContainer,
  getStateValidateInput
} from '../../../../helpers/form.helper';

export const renderInput = ({
                              input, type, placeholder,
                              meta: { touched, error, warning }
                            }) => (
  <div className={`input-group mb-3 ${getStateValidateContainer(touched, error, warning)}`}>
    <span className="input-group-addon">
      <i className="icon-lock"/>
    </span>
    <input {...input} className={`form-control ${getStateValidateInput(touched, error, warning)}`}
           placeholder={placeholder} type={type} autoComplete="on"/>
  </div>
);

const InputGroupPassword = ({ name, type, label, placeholder, validate }) => (<Field
  name={name}
  type={type}
  label={label}
  validate={validate}
  component={renderInput}
  placeholder={placeholder}
/>);
export default InputGroupPassword;
