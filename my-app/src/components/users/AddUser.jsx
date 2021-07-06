import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

function AddUser() {
    const history =useHistory()
    const [user, setUser] = useState({ name: "", username: "", email: "", phone: "", website: "", })
    
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setUser({...user,[name]:value})
    }

    const handleSubmit =async (e) => {
        e.preventDefault();
        const { name, username, email, phone, website }=user
        const res = await fetch("/add", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name, username, email, phone, website
            })
        })
        const data = await res.json()

        if (res.status!==422) {
            console.log(data.data);
            history.push('/')

            console.log(user);
            setUser({name: "", username: "", email: "", phone: "",website: ""})
        } else {
            alert(data.message)
        }
        
    }

    return (
        <div className="container">
            <div className="card p-3 mx-auto my-5 shadow w-75">
                <h1 className="text-center">Add User</h1>
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
                    <button type="submit" className="btn btn-primary w-100">Add User</button>
                </form>
            </div>
        </div>
    )
}

export default AddUser
