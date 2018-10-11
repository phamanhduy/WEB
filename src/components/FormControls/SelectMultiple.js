import React from 'react';
import { Field } from 'redux-form';
import Multiselect from 'react-widgets/lib/Multiselect';
import ValidateMessage from './ValidateMessage';
import {
  getStateValidateContainer
} from '../../helpers/form.helper';

export const filterName = (item, value, textField) => {
  const itemName = item[textField].toLowerCase();
  const valueLower = value.toLowerCase();
  return itemName.indexOf(valueLower) === 0;
};
export const renderMultiselectCreateNew =
  ({ input, data, valueField, className, textField, label, meta: { touched, error, warning } }) => (
    <div className={`${className} ${getStateValidateContainer(error, warning)}`}>
      <Multiselect {...input}
        onBlur={() => input.onBlur()}
        value={input.value || []} // requires value to be an array
        data={data}
        placeholder={label}
        onCreate={
          (code) => {
            const newTag = {
              id: code,
              code
            };
            input.value = [...input.value, newTag];
            input.onChange(input.value);
          }
          }
        valueField={valueField}
        textField={textField}
      />
      <ValidateMessage
        touched={touched}
        error={error}
        warning={warning}
        label={label}
      />
    </div>
  );
export const renderMultiselect =
  ({ input, data, valueField, className, textField, label, meta: { touched, error, warning } }) => (
    <div className={`${className} ${getStateValidateContainer(error, warning)}`}>
      <Multiselect {...input}
        onBlur={() => input.onBlur()}
        value={input.value || []} // requires value to be an array
        data={data}
        placeholder={label}
        valueField={valueField}
        textField={textField}
      />
      <ValidateMessage
        touched={touched}
        error={error}
        warning={warning}
        label={label}
      />
    </div>
  );
const SelectMultiple = ({
  name, allowCreate, data, label, valueField, textField, validate, className, onChange
}) => {
  if (allowCreate) {
    return (
      <Field
        name={name}
        data={data}
        label={label}
        valueField={valueField}
        textField={textField}
        validate={validate}
        component={renderMultiselectCreateNew}
        className={className}
        onChange={onChange}
      />);
  }
  return (
    <Field
      name={name}
      data={data}
      label={label}
      valueField={valueField}
      textField={textField}
      validate={validate}
      component={renderMultiselect}
      className={className}
      onChange={onChange}
    />);
};
export default SelectMultiple;
