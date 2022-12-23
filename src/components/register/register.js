import React,{useState} from "react"
import "./register.css"
import axios from "axios"
import {useNavigate } from "react-router-dom"
import Navbar from "../homepage/home_page_components/navbar"


const Register = ()=>{

    const navigate  = useNavigate()

    

    const [user , setUser] = useState({
        name : "",
        email: "",
        password:"",
        reEnterPassword:""
    })

    const handleChange = e =>{
        const {name,value} = e.target
        
        setUser({
            ...user,
            [name] : value
        })
    }

    const register =() =>{
        const {name, email, password ,reEnterPassword } = user
        if (name && email && password && (password === reEnterPassword)) {
            alert("posted")
            axios.post("http://localhost:5000/register", user)
            .then(res => {alert(res.data.message)
            navigate("/login")
            })
        }else{
             alert("invlid input")
        }
    }

    return (
        <>
        <Navbar />

        {/* <div>Register Page */}
        {console.log("User" , user)}
        <div className="main">
        <div className="register">
        
        <h1>Register {user.name} </h1>
        <input type="text" name="name"  value={user.name} placeholder="Your Name" onChange={handleChange}></input>
        <input type="text" name="email" value={user.email}  placeholder="Your Email" onChange={handleChange}></input>
        <input type="password" name="password"  value={user.password} placeholder="Your Password" onChange={handleChange}></input>
        <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange}></input>
        <div className="button" onClick={register} >Register</div>
        <div>or</div>
        <div className="button" onClick={()=>{ navigate("/login")}}>Login</div>
    </div>
    </div>

    </>
    )
}

export default Register