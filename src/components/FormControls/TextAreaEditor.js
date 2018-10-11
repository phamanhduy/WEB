import React from 'react';
import TinyMCEInput from 'react-tinymce-input';
import { Field } from 'redux-form';
import {
  configTinyMCE
} from '../../config/constants';
import ValidateMessage from './ValidateMessage';
import {
  getStateValidateContainer
} from '../../helpers/form.helper';

const renderTextAreaEditor = ({
  input, className, label,
  meta: { touched, error, warning }
}) => (
  <div className={`${className} ${getStateValidateContainer(touched, error, warning)}`}>
    <TinyMCEInput
      {...input}
      placeholder={label}
      value={input.value}
      tinymceConfig={configTinyMCE}
    />
    <ValidateMessage
      touched={touched}
      error={error}
      warning={warning}
      label={label}
    />
  </div>
);

const TextAreaEditorReduxForm = ({ name, label, validate, className }) => (<Field
  name={name}
  label={label}
  validate={validate}
  component={renderTextAreaEditor}
  className={className}
/>);
export default TextAreaEditorReduxForm;
