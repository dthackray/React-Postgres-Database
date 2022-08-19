import Label from "./Label"
import Field from "./Field"
import Button from "./Button"
import React, { useReducer, useState } from 'react'

const formReducer = (state, event) => {
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}

const Form = () => {
    const [nameData, setNameData] = useReducer(formReducer, {})
    const [ageData, setAgeData] = useReducer(formReducer, {})
    const [submitting, setSubmitting] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        setSubmitting(true)
    
        setTimeout(() => {
            setSubmitting(false)
            alert("You have submitted the form.")
        }, 3000)
    }

    return (
        <div>
            {submitting && <div>Submitting Form...</div>}
            <form className="form" onSubmit={handleSubmit}>
                <Label htmlFor="name" text="Enter your name: " />
                <Field name="name" id="name" onChange={setNameData} />
                <Label htmlFor="age" text="Enter your age: " />
                <Field name="age" id="age" onChange={setAgeData} />
                <Button type="submit" value="Submit!" />
            </form>
        </div>
  )
}

export default Form