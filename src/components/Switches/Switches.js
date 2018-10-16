import React from 'react'
import propTypes from 'prop-types'

const Switches = ({ value, onChange }) => (
  <div className="container-fluid">
    <label className="switch switch-default switch-pill switch-primary">
      <input type="checkbox"
             className="switch-input"
             checked={value}
             onChange={() => (onChange(!value))}/>
      <span className="switch-label"></span>
      <span className="switch-handle"></span>
    </label>
  </div>
)

Switches.propTypes = {
  onChange: propTypes.func,
  textChecked: propTypes.string,
  value: propTypes.bool,
  textUnChecked: propTypes.string,
}

export default Switches
