import React from 'react'
import { useFormStore } from '../exampleStoreContexts/formStoreContext'

export default function FormInfo() {
    const { user } = useFormStore()

    return user.first_name||user.last_name||user.email? (
        <div>
          Name: {user.first_name} {user.last_name}
          <br/>
          email: {user.email}
        </div>
    ) : <div>User info will be shown here upon submission.</div>
}



