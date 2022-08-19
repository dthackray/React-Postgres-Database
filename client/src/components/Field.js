import React from 'react'

const Field = ({ name, id, onChange, value }) => {
  return (
    <input className="field" type="text" name={name} id={id} onChange={onChange} value={value} required />
  )
}

export default Field