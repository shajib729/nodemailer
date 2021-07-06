import React,{useEffect, useState} from 'react'
import { useParams,Link } from 'react-router-dom'
import axios from 'axios'

function User() {

    const { id } = useParams()

    // const history =useHistory()
    const [user, setUser] = useState({ name: "", username: "", email: "", phone: "", website: "", })

    useEffect(() => {
        loadUsers()
    }, [])

    const loadUsers = async () => {
        const res = await fetch(`/users/${id}`)
        const data =await res.json()
        console.log(data.data);
        if (res.status !== 422) {
            // console.log(data);
            setUser(data.data)
        } else {
            alert(data.message);
        }
        
        // history.push('/')
    }

    return (
        <div className="container">
            <div className="card p-3 mx-auto my-5 shadow w-75">
                <h1 className="text-center display-5">User Name : {id}</h1>
                {/* <hr /> */}
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Name : {user.name}</li>
                    <li className="list-group-item">Username : {user.username}</li>
                    <li className="list-group-item">Email : {user.email}</li>
                    <li className="list-group-item">Phone : {user.phone}</li>
                    <li className="list-group-item">Website : {user.website}</li>
                </ul>
                <Link className="btn btn-primary" to="/">Back To Home</Link>
            </div>
        </div>
    )
}

export default User
