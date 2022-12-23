import React,{useState} from "react"
import "./login.css"
import axios from "axios"
import {useNavigate } from "react-router-dom"
import Navbar from "../homepage/home_page_components/navbar"

const Login = ({setLoginUser})=>{

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

    const login = ()=>{
        axios.post("http://localhost:5000/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            navigate("/")



        })

    }

    return (
        <>
        <Navbar />
        {/* <div>login Page</div> */}
        <div className="main">
        {/* {console.log("User" , user)} */}

        <div className="login">
            <h1>Login</h1>
            <input type="text"  name="email" value={user.email}   placeholder="Enter your Email" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password}  onChange={handleChange} placeholder="Enter your Password" ></input>
            <div className="button" onClick={login} >Login</div>
            <div>or</div>
            <div className="button" onClick={()=>{ navigate("/register")}}>Register</div>
        </div>
        </div>

        </>
    )
}

export default Login