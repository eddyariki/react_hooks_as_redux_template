import React, { useState } from 'react'
import { useFormDispatch } from '../exampleStoreContexts/formStoreContext'

export default function Form() {
    const dispatch = useFormDispatch()
    const [first_name, setFirstName] = useState()
    const [last_name, setLastName] = useState()
    const [email, setEmail] = useState()


    const handleChange = e =>{
        const {name, value} = e.target
        if(name==="first"){
            setFirstName(value)
        }else if(name==="last"){
            setLastName(value)
        }else if(name==="email"){
            setEmail(value)
        }
    }

    const handleSubmit =e=>{
        e.preventDefault();
        const user = {
            first_name,
            last_name,
            email
        }
        dispatch({type:"SUBMIT",payload:user})
    }
    return (
        <div>
            <h1>Form Example</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="first" value={first_name} onChange={handleChange} placeholder="John"/>
                <br/>
                <input type="text" name="last" value={last_name}  onChange={handleChange} placeholder="Doe"/>
                <br/>
                <input type="text" name="email" value={email}  onChange={handleChange} placeholder="HelloWorld@hooks.redux"/>
                <input type="submit"/>
            </form>
        </div>
    )
}
