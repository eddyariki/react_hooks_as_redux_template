import makeStore from '../store'

const initialState = {
    stateOne: 0,
    stateTwo: {
        stateTwoChild:0
    },
    stateThree: false
}

const reducer = (state, action) => {
    const {stateTwo, stateThree} = state
    switch(action.type){
        case "CHANGE_STATEONE":
            return {...state, stateOne: action.payload}
        case  "CHANGE_STATETWO":
            return {
                ...state, 
                stateTwo: {
                    ...stateTwo,
                    stateTwoChild: stateTwo.stateTwoChild+action.payload
                }
            }
        case "CHANGE_STATETHREE":
            return {...state, stateThree: !stateThree}
        default:
            return state
    }
}

const [StateProvider, useStateStore, useStateDispatch] = makeStore(reducer, initialState)

export {StateProvider, useStateStore, useStateDispatch}