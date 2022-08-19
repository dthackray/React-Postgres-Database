import Label from "./Label"
import Field from "./Field"
import Button from "./Button"
import React, { useReducer, useState } from 'react'
import addUser from "../../../server/server.js"

const formReducer = (state, event) => {
    if (event.reset) {
        return {
            name: '',
            age: ''
        }
    }
    return {
        ...state,
        [event.name]: event.value
    }
}

const Form = () => {
    const [formData, setFormData] = useReducer(formReducer, {})
    const [submitting, setSubmitting] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        setSubmitting(true)

        addUser()

        // fetch('http://localhost:4000/adduser', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({formData}),
        //     })
        //     .then(response => {
        //         return response.text();
        //     })
        //     .then(data => {
        //         alert(data);
        //     });

        }

    const handleChange = event => {
        setFormData({
            name: event.target.name,
            value: event.target.value
        })
    }

    return (
        <div>
            {submitting &&
                <div>
                    You are submitting:
                    <ul>
                        {Object.entries(formData).map(([name, value]) => (
                            <li key={name}><strong>{name}</strong>:{value.toString()}</li>
                        ))}
                    </ul>
                </div>}
            <form className="form" onSubmit={handleSubmit}>
                <Label htmlFor="name" text="Enter your name: " />
                <Field name="name" id="name" onChange={handleChange} value={formData.name || ''} />
                <Label htmlFor="age" text="Enter your age: " />
                <Field name="age" id="age" onChange={handleChange} value={formData.age || ''} />
                <Button type="submit" value="Submit!" />
            </form>
        </div>
  )
                        }

export default Form