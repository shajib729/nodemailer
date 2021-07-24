import React,{useState} from 'react'

const Contact = () => {

    const [datas, setDatas] = useState({ name: '', email: '', subject: '', message: '' })
    
    const handleChange = (e) => {
        setDatas({...datas,[e.target.name]:e.target.value})
    }

    const handleSubmit =async (e) => {
        e.preventDefault()

        const res = await fetch('/contact', {
            method: "post",
            headers: {
              "Content-Type":"application/json"  
            },
            body:JSON.stringify({name:datas.name,email:datas.email,subject:datas.subject,message:datas.message})
        })
        const data=await res.json()
        console.log(res);
        alert(data.message);

    }

    return (
        <section className="contact container">
            <form className="w-75 mt-5 m-auto" onSubmit={handleSubmit}>
                <div className="form-group mt-5">
                    <label>Full Name</label>
                    <input onChange={handleChange} name='name' type="text" className="form-control" placeholder="Enter Your Fullname"/>
                </div>
                <div className="form-group mt-4">
                    <label>Email address</label>
                    <input onChange={handleChange} name='email' type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter Your Email"/>
                </div>
                <div className="form-group mt-4">
                    <label>Subject</label>
                    <input onChange={handleChange} name='subject' type="text" className="form-control" placeholder="Enter The Subject"/>
                </div>
                <div class="form-group mt-4">
                    <label>Message</label>
                    <textarea onChange={handleChange} name='message' class="form-control" placeholder="Enter Your Message" rows="7"></textarea>
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-primary mt-3" />
                </div>
            </form>
        </section>
    )
}

export default Contact
