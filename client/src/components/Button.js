import React from 'react'

const Button = ({ type, value }) => {
  return (
    <input className="button" type={type} value={value} />
  )
}

export default Button