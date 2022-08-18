import React from 'react'

const Field = ({ name, id }) => {
  return (
    <input className="field" type="text" name={name} id={id} required />
  )
}

export default Field