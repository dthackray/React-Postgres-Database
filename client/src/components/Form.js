import Label from "./Label"
import Field from "./Field"
import Button from "./Button"
import React, { useState } from 'react'

const Form = () => {
    const handleSubmit = e => {
        e.preventDefault()
        setSubmitting(true)
    
        setTimeout(() => {
            setSubmitting(false)
            alert("You have submitted the form.")
        }, 3000)
    }

    const [submitting, setSubmitting] = useState(false)

    return (
        <div>
            {submitting && <div>Submitting Form...</div>}
            <form className="form" onSubmit={handleSubmit}>
                <Label htmlFor="name" text="Enter your name: " />
                <Field name="name" id="name" />
                <Label htmlFor="age" text="Enter your age: " />
                <Field name="age" id="age" />
                <Button type="submit" value="Submit!" />
            </form>
        </div>
  )
}

export default Form