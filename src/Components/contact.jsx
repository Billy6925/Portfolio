import React,{useState} from "react";
import emailjs from "@emailjs/browser";
import "../App.css";

export default function Contact(){
    const [inputs,setInputs]=useState({
        name:"",
        email:"",
        message:""
    })

    const handleChange=(e)=>{
        const name= e.target.name;
        const value= e.target.value;

        setInputs(values=> ({...values,[name]:value}))
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        const {name,email,message}= inputs

        emailjs
        .send(
            "service_uw23x7a",
            "template_djy4twn",
            inputs,
            "HEVQvw215uO8qPq8V"
        )
        .then(()=> {
            alert("Message sent successfully")

            setInputs({
                name:"",
                email:"",
                message:""
            })
        })
        .catch((error)=> {
            console.error(error)
            alert("Failed to send message.")
        })
    }

    return(
        <div className="contact text-success text-center pt-2">
        <h3 className="fs-1">Let's Build Something Great Together.</h3>
        <p className="fs-6">I'm always open to discussing software engineering opportunities, freelance projects, or exciting ideas. Whether you're looking for a full-stack developer or simply want to connect, I'd love to hear from you.</p>
        <form onSubmit={handleSubmit} className="form border rounded-4 bg-white shadow p-3 mx-auto">
            <label className="fw-semibold">Name: <br/>
                <input 
                type="text"
                name="name"
                placeholder="Your Name"
                value={inputs.name}
                onChange={handleChange}
                className="form-control border rounded border-success px-2 border-1 lh-1"
                required
                />
            </label>
            <br/>
            <label className="fw-semibold">Email: <br/>
                <input 
                type="email"
                name="email"
                placeholder="Email"
                value={inputs.email}
                onChange={handleChange}
                className="form-control border rounded border-success px-2 lh-1"
                required
                />
            </label>
            <br/>
            <label className="fw-semibold">Message: <br/>
                <textarea
                name="message"
                placeholder="Write your message here...."
                value={inputs.message}
                onChange={handleChange}
                className="form-control border rounded border-success px-2"
                rows="3"
                required
                />
            </label>
            <br/>
            <button type="submit" className="border rounded text-success border-success px-1 fw-normal border-2">Send Message</button>
        </form>
        </div>
    )
}