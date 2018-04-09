import * as React from 'react'

interface Props {
  label: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  value: boolean
}

const CheckBox = (props: Props) => {

  const { label, onChange, value } = props

  return (
    <React.Fragment>
      <label>
        <span>{label}</span>
        <input type="checkbox" onChange={onChange} checked={value}/>
      </label>
    </React.Fragment>
  )

}

export default CheckBox