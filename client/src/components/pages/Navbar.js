import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Appcontext from '../context/Appcontext'
import "../css/navbar.css"

const Navbar = () => {
  const mainstate=useContext(Appcontext)

  let checker=localStorage.getItem("userID")

  const [show1,setShow1]=useState(false)
  const [show2,setShow2]=useState(false)
  const [validate,setValidate]=useState(false)

  function getScreenWidth(){
    let a=window.screen.width
    return a
  }
  useEffect(()=>{
   let swidth= getScreenWidth()

   if(swidth>501){
    setShow1(true)
    setShow2(false)
   }else{
    setShow1(false)
    setShow2(true)
   }
  },[])

  function overlayset(){
    if(mainstate.overlay===true){

      mainstate.setOverlay(false)

    }else{
      mainstate.setOverlay(true)

    }
  }

 
    async function admincheck(userID){
      try {
       await fetch("http://localhost:3001/api/auth/getuserdetails",{
         method:"GET",
         headers: { "Content-type": "application/json",userID:userID },

       }).then((res)=>{
         return res.json()
       }).then((data)=>{
         if(data.success===true){
          if(data.user.role==="admin"){
            setValidate(true)
          }
         }
       }).catch((error)=>{
         console.log(error)
       })
     
      } catch (error) {
       console.log(error)
      }
       }
  

    if(checker){
        admincheck(checker)
    }

  return (
    <>
    
    <div className="nav">
        <ul className="nav-ul">
            <li className="list-ele nav-heading"><Link to="/">Myknot</Link></li>
            {
              show1===true?<>
              <li className="list-ele"><Link to="/">Home</Link></li>
              <li className="list-ele"><Link to="/aboutus">About Us</Link></li>
              <li className="list-ele"><Link to="/contact">Contact Us</Link></li>
              <li className="list-ele"><Link to="/admin">{validate?"Become a seller":null}</Link></li>
              <li className="list-ele"></li>
              <li className="list-ele"></li>
              <li className="list-ele"></li>
              <li className="list-ele"><Link to="/register">Signup</Link></li>
              <li className="list-ele testing2">{checker?<Link >Logout</Link>:<Link to="/login">Login</Link>}</li>
              </>: undefined
            }
            {
              show2===true?<><li className="list-ele m-nav-overrider1"></li>
              <li className="list-ele m-nav-overrider2" onClick={()=>{
                overlayset()
              }}>Menue</li></>:undefined
            }
            {/* <li className="list-ele testing"><p className="nav-p1"><i className="bi bi-person-circle nav-icon1"></i>Leston Aaron Salis</p></li> */}
        </ul>
    </div>
    
    </>
  )
}

export default Navbar
