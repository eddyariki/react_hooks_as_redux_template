import makeStore from '../store'

const initialState = {
    user:{
        first_name:null,
        last_name: null,
        email: null,
    }
}

const reducer = (state, action) => {
    switch(action.type){
        case "SUBMIT":
            return {user: action.payload}
        default:
            return state
    }
}

const [FormProvider, useFormStore, useFormDispatch] = makeStore(reducer, initialState)

export {FormProvider, useFormStore, useFormDispatch}