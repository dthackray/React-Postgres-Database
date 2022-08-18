import Label from "./Label"
import Field from "./Field"
import Button from "./Button"
import React from 'react'

const handleSubmit = e => {
    e.preventDefault()
    alert("You have submitted the form.")
}

const Form = () => {
  return (
    <form className="form" onSubmit={handleSubmit}>
        <Label htmlFor="name" text="Enter your name: " />
        <Field name="name" id="name" />
        <Label htmlFor="age" text="Enter your age: " />
        <Field name="age" id="age" />
        <Button type="submit" value="Submit!" />
    </form>
  )
}

export default Form