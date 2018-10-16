import React from 'react'
import { Field } from 'redux-form'
import {
  getStateValidateContainer,
  getStateValidateInput
} from '../../helpers/form.helper'
import ValidateMessage from './ValidateMessage'

export const renderInput = ({
                              input, className, label, type,
                              meta: { touched, error, warning }
                            }) => (
  <div className={`${className} ${getStateValidateContainer(touched, error, warning)}`}>
    <input {...input} className={`form-control ${getStateValidateInput(touched, error, warning)}`}
           placeholder={label} type={type}/>
    <ValidateMessage
      touched={touched}
      error={error}
      warning={warning}
      label={label}
    />
  </div>
)

const Input = ({ name, type, label, validate, className = '' }) => (<Field
  name={name}
  type={type}
  label={label}
  validate={validate}
  component={renderInput}
  className={className}
/>)
export default Input
