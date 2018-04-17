import * as React from 'react'

interface Props {
  label: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  value: boolean
}

const CheckBox = (props: Props) => {

  const { label, onChange, value } = props

  return (
    <div>
      <label>
        <input type="checkbox" onChange={onChange} checked={value}/>
        <span>{label}</span>
      </label>
    </div>
  )

}

export {
  CheckBox
}