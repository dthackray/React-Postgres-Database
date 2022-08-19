import React from 'react'

const Field = ({ name, id, onChange }) => {
  return (
    <input className="field" type="text" name={name} id={id} onChange={onChange} required />
  )
}

export default Field