import React from 'react'
import { Field } from 'redux-form'
import DropdownList from 'react-widgets/lib/DropdownList'
import ValidateMessage from './ValidateMessage'
import {
  getStateValidateContainer
} from '../../helpers/form.helper'

export const filterName = (item, value, textField) => {
  const itemName = item[textField].toLowerCase()
  const valueLower = value.toLowerCase()
  return itemName.indexOf(valueLower) === 0
}
export const renderSelect =
  ({
     input, data, valueField, className, helpText, textField, label,
     meta: { touched, error, warning }
   }) =>
    (
      <div className={`${className} ${getStateValidateContainer(error, warning)}`}>
        <DropdownList {...input}
                      data={data}
                      value={input.value}
                      valueField={valueField}
                      textField={textField}
                      onChange={input.onChange}
                      placeholder={label}
                      filter={(item, value) => filterName(item, value, textField)}
        />
        <ValidateMessage
          touched={touched}
          error={error}
          warning={warning}
          label={label}
        />
        <span className="help-block text-success">{helpText}</span>

      </div>
    )

const Select = ({ name, data, label, valueField, textField, helpText, validate, className }) => (
  <Field
    name={name}
    data={data}
    label={label}
    valueField={valueField}
    textField={textField}
    validate={validate}
    component={renderSelect}
    className={className}
    helpText={helpText}
  />)
export default Select
