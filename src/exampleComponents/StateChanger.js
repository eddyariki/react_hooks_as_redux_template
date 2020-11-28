import React from 'react'
import { useStateDispatch } from '../exampleStoreContexts/stateStoreContext'

export default function StateChanger() {
    const dispatch = useStateDispatch()

    const handleClick = (e) =>{
        const {name} = e.target
        if(name ==="one"){
            dispatch({type:"CHANGE_STATEONE", payload:Math.random()*10})
        }else if(name==="two"){
            dispatch({type:"CHANGE_STATETWO", payload:Math.random()*10})
        }else if(name==="three"){
            dispatch({type:"CHANGE_STATETHREE", payload:null})
        }
        
    }
    return (
        <div>
            <h1>Simple States Example</h1>
            <button onClick={handleClick} name="one">change state one</button>
            <button onClick={handleClick} name="two">change state two</button>
            <button onClick={handleClick} name="three">change state three</button>
        </div>
    )
}
