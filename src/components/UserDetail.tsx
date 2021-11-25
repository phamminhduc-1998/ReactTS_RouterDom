import React, { useState, useEffect } from 'react'
import User from './User'
import { useParams } from 'react-router-dom'

function UserDetail() {

    const { id } = useParams()
    const [state, setState] = useState<User | null>(null);

    const fetchData = async () => {
        const data = await fetch(`https://618b7cd0ded7fb0017bb8fdd.mockapi.io/todos/${id}`)
        const users = await data.json()
        console.log(users)
        setState(users)
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <>
        {state && 
        <> 
            <h1>{state.name}</h1>
            <h1>{state.email}</h1>
            <h1>{state.phone}</h1>
        </>}
            
        </>
    )
}

export default UserDetail;
