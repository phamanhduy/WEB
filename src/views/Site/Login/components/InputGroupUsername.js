import React from 'react';
import { Field } from 'redux-form';
import {
  getStateValidateContainer,
  getStateValidateInput
} from '../../../../helpers/form.helper';

export const renderInput = ({
                              input, placeholder, type,
                              meta: { touched, error, warning }
                            }) => (
  <div className={`input-group mb-3 ${getStateValidateContainer(touched, error, warning)}`}>
    <span className="input-group-addon">
      <i className="icon-user"/>
    </span>
    <input {...input} className={`form-control ${getStateValidateInput(touched, error, warning)}`}
           placeholder={placeholder} type={type}
    />
  </div>
);

const InputGroupUsername = ({ name, type, label, validate, placeholder }) => (<Field
  name={name}
  type={type}
  label={label}
  validate={validate}
  component={renderInput}
  placeholder={placeholder}
/>);
export default InputGroupUsername;
