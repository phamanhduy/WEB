import React from 'react';

const ValidateMessage = ({ touched, error, warning }) => (
  touched &&
  (
    (error && <span className="text-danger">{error}</span>) ||
    (warning && <span className="text-warning">{warning}</span>)
  )
) || null;

export default ValidateMessage;
