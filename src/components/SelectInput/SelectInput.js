import React from 'react'
import Select from 'react-select'

const SelectInput = (props) => {
  const config = {
    creatable: true,
    backspaceRemoves: true,
    multi: true,
    value: 1
  }
  const {
    creatable,
    backspaceRemoves,
    multi
  } = config

  const AsyncComponent = creatable
    ? Select.AsyncCreatable
    : Select.Async
  return (
    <div>
      <AsyncComponent multi={multi}
                      value={props.value}
                      onChange={code => props.onChange(code)}
                      valueKey="code"
                      labelKey="code"
                      loadOptions={props.loadOptions}
                      backspaceRemoves={backspaceRemoves}
      />
    </div>
  )
}
export default SelectInput
