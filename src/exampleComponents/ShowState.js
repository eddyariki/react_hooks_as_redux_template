import React from 'react'
import { useStateStore } from '../exampleStoreContexts/stateStoreContext'

export default function ShowState() {
    const {stateOne, stateTwo, stateThree} = useStateStore()
    return (
        <div>
            stateOne: {stateOne}
            <br/>
            stateTwoChild: {stateTwo.stateTwoChild}
            <br/>
            stateThree: {stateThree? "Hey": "No"}
        </div>
    )
}
