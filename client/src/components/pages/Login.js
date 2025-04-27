import React, { useState } from 'react'
import "../css/login.css"
import Navbar from './Navbar'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate()
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  
  const toastoptions = {
    position: "top-center",
    autoClose: 1000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  async function submitHandler(){
    if(!email || !password){
      toast.error("Please enter email or password",toastoptions)
      return
    }
    try {
      // await fetch("https://myknot-official.herokuapp.com/api/auth/login",{
      await fetch(`${process.env.REACT_APP_API_URL}/api/auth/login`, {
      // await fetch("https://myknot-official.vercel.app/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        // withCredentials:true,
        // credentials:"include",
   
        headers: {
          credentials:"include",
          "Content-type": "application/json",
          "Access-Control-Allow-Credentials": "true",
          // "Sec-Fetch-Site": "cross-site",
          // "Access-Control-Expose-Headers":"Set-cookie"
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data.success === false) {
            toast.error("Please enter valid email or password", toastoptions);
            return;
          } else {
            
           document.cookie=`token=${data.token};max-age=1000;HttpOnly=true;`
            localStorage.setItem("userID", data.user._id);
            toast.success("Logged in successfully", toastoptions);
            navigate("/");
            return data;
          }
        })
        .catch((error) => [console.log(error)]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <Navbar/>
    
    <div className="l-one">
        <div className="l-two">

        </div>
       <div className="l-three">
        <div className="heading">
          <h1>Login</h1>
        </div>
        <div className="l-form">
          <div className="l-input-control">
            <input
              type="text"
              placeholder="Email"
              className="l-input-common"
              value={email}
              onChange={(e)=>[
                setEmail(e.target.value)
              ]}
            />
            <input
              type="password"
              placeholder="Password"
              className="l-input-common"
              value={password}
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
            />
          </div>
          <div className="l-formbtn">
            <button
              type="submit"
              className="l-formbtn-1"
              onClick={()=>{
                submitHandler()
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
    
    </>
  )
}

export default Login

