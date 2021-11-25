import { type } from 'os';
import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'


type User = {
    id: number;
    phone: string;
    email: string;
    name: string;
}

function User() {

    const [state, setState] = useState<User[]>([]);

    const fetchData = async () => {
        const data = await fetch('https://618b7cd0ded7fb0017bb8fdd.mockapi.io/todos')
        const users = await data.json()
        console.log(users)
        setState(users)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            {state.map(user => (
                <div key={user.id}>
                    <Link to={`/users/${user.id}`}>{user.name}</Link>
                </div>
            ))}
        </>
    )
}

export default User;
