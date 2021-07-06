import React,{useEffect, useState} from 'react'
import { useHistory,useParams } from 'react-router-dom'
import axios from 'axios'

function EditUser() {

    const { id } = useParams()
    console.log(id);

    const history =useHistory()
    const [user, setUser] = useState({ name: "", username: "", email: "", phone: "", website: "", })
    
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setUser({...user,[name]:value})
    }

    const handleSubmit =async (e) => {
        e.preventDefault();
        await axios.patch(`/edit/${id}`,user)
        history.push('/')

        console.log(user);
        setUser({name: "", username: "", email: "", phone: "",website: ""})
    }

    useEffect(() => {
        loadUsers()
    }, [])

    const loadUsers = async () => {
        const res=await axios.get(`/users/${id}`)
        console.log(res.data.data);
        setUser(res.data.data)
        // history.push('/')
    }

    return (
        <div className="container">
            <div className="card p-3 mx-auto my-5 shadow w-75">
                <h1 className="text-center">Edit User</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group my-3">
                        <input type="text" name="name" value={user.name} onChange={handleChange} className="form-control" placeholder="Enter Your Name"/>
                    </div>
                    <div className="form-group my-3">
                        <input type="text" name="username" value={user.username} onChange={handleChange} className="form-control" placeholder="Enter Your Username"/>
                    </div>
                    <div className="form-group my-3">
                        <input type="email" name="email" value={user.email} onChange={handleChange} className="form-control" placeholder="Enter Your E-mail Address"/>
                    </div>
                    <div className="form-group my-3">
                        <input type="text" name="phone" value={user.phone} onChange={handleChange} className="form-control" placeholder="Enter Your Phone Number"/>
                    </div>
                    <div className="form-group my-3">
                        <input type="text" name="website" value={user.website} onChange={handleChange} className="form-control" placeholder="Enter Your Website Name"/>
                    </div>
                    <button type="submit" className="btn btn-warning w-100">Edit User</button>
                </form>
            </div>
        </div>
    )
}

export default EditUser
