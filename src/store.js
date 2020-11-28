import React, {createContext, useReducer, useContext} from 'react'

export default function makeStore(reducer, initialState){
    const storeContext = createContext()
    const dispatchContext = createContext()

    const StoreProvider = ({children}) => {
        const [store, dispatch] = useReducer(reducer, initialState)

        return(
            <dispatchContext.Provider value={dispatch}>
                <storeContext.Provider value={store}>
                    {children}
                </storeContext.Provider>        
            </dispatchContext.Provider>
        )
    }
    function useStore(){
        return useContext(storeContext)
    }
    function useDispatch(){
        return useContext(dispatchContext)
    }
    return [StoreProvider, useStore, useDispatch]
}

/*  
==================================
USAGE: make a store context e.g userStoreContext.js
==================================

    import makeStore from "......store"
    const initialState = {

    }

    const reducer = (state, action) => {
        switch(action.type){
            case "":
                return {...state, ..}
        }
    }

    const [TYPEStoreProvider, useTYPEStore, useTYPEDispatch] = makeStore(reducer, initialState)

    export {TYPEStoreProvider, useTYPEStore, useTYPEDispatch}
*/