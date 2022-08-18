import Label from "./Label"
import Field from "./Field"
import Button from "./Button"
import React from 'react'

const Form = () => {
  return (
    <form className="form">
        <Label htmlFor="name" text="Enter your name: " />
        <Field name="name" id="name" />
        <Label htmlFor="age" text="Enter your age: " />
        <Field name="age" id="age" />
        <Button type="submit" value="Submit!" />
    </form>
  )
}

export default Form