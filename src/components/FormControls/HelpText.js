import React from 'react';

const HelpText = ({ helpText }) => (
  helpText !== ''
    ?
    <span className="help-block text-success">{helpText}</span>
    :
    null
);
export default HelpText;
