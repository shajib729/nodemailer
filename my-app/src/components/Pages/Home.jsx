import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Home() {
    const [users, setUsers] = useState([]);

        const loadUsers =async () => {
            try {
                const res = await fetch('/users', {
    //###### Uncomment all above this letter######
                    method: "GET",
                    // headers: {
                    //     // Accept: "application/json",
                    // //   "Content-Type":"application/json"
                    // }
                    // credentials: "include"
                })
                const data=await res.json()
                // console.log(res);
                if (data) {                    
                    setUsers(data.data);
                    // console.log(data)
                } else {
                    console.log("Data can't get");
                }
                
            } catch (err) {
                console.log(err.message);
            }
        }

    const deleteUser = async (id) => {
        const res = await fetch(`/delete/${id}`, {
            method:"DELETE"
        })
        console.log(res);
        const data = await res.json()
        if (res.status !== 422) {
            console.log(data);
        } else {
            console.log(data.message);
        }

        // await axios.delete(`/delete/${id}`) ###we can use this line instead of upper way### 
        loadUsers()
    }

    useEffect(() => {
        loadUsers()
    },[])

       

    return (
        <div className="container">
            <h1>Home page</h1>
            <table className="table table-hover bordered shadow">
                <thead className="table-dark">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">User Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                     {
                       users.map((user, index) => {
                            return (
                                <tr>
                                    
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link className="btn btn-primary" to={`/users/${user.username}`}>View</Link>
                                        <Link className="btn btn-outline-primary mx-2" to={`/users/edit/${user.username}`}>Edit</Link>
                                        <Link className="btn btn-danger" onClick={()=>deleteUser(user.username)}>Delete</Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default Home
