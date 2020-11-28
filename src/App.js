import React from 'react'

import { StateProvider} from "./exampleStoreContexts/stateStoreContext"
import StateChanger from "./exampleComponents/StateChanger"
import ShowState from "./exampleComponents/ShowState"

import { FormProvider }  from "./exampleStoreContexts/formStoreContext"
import Form from "./exampleComponents/Form"
import FormInfo from "./exampleComponents/FormInfo"

export default function App() {
    return (
        <>
            <StateProvider>
                <StateChanger/>
                <ShowState/>
            </StateProvider>
            <hr/>
            <FormProvider>
                <Form/>
                <FormInfo/>
            </FormProvider>
        </>
    )
}
