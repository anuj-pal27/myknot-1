import React,{useEffect,useContext} from 'react'
import { Link } from 'react-router-dom'
import "../css/footer.css"
import Appcontext from "../context/Appcontext";

const Footer = () => {

    const mainstate = useContext(Appcontext);


    async function fullthemes(){
        try {
         
        //  await fetch("http://localhost:3001/api/themes/getallthemes",{
         await fetch("https://myknot-official.vercel.app/api/themes/getallthemes",{
           method:"GET",
           headers: {
             "Content-type": "application/json"
           },
         }).then((res)=>{
           return res.json()
         }).then((data)=>{
           if(data.success===true){
             console.log(data)
             mainstate.setThemes(data.themes)
           }
         }).catch((error)=>{
           console.log(error)
         })
     
        } catch (error) {
           console.log(error)
        }
       }
    
    async function getAllCategories(){
      try {
         
        // await fetch("http://localhost:3001/api/category/getallcategories",{
        await fetch("https://myknot-official.vercel.app/api/category/getallcategories",{
          method:"GET",
          headers: {
            "Content-type": "application/json"
          },
        }).then((res)=>{
          return res.json()
        }).then((data)=>{
          if(data.success===true){
            mainstate.setCategories(data.categories)
          }
        }).catch((error)=>{
          console.log(error)
        })
    
       } catch (error) {
          console.log(error)
       }
    }
     
       useEffect(()=>{
           fullthemes()
          getAllCategories()
       },[])

  return (
   <>
   
    <div className="f-one">
        <div className="f-two">
        {/* <p className="f-p1">ShopX</p> */}
        <p className='f-p2'><Link to="/contact">Visit help center</Link></p>

        <div className="f-three">
            <div className="f-three-child">
                <ul className="f-list">
                    <li className="list-head">Company</li>
                    <li className="f-list-ele"><Link to="/aboutus">About Us</Link></li>
                    <li className="f-list-ele"><Link to="/contact">Contact Us</Link></li>
                    <li className="f-list-ele"><Link to="/login">Login</Link></li>
                    <li className="f-list-ele"><Link to="/register">SignUp</Link></li>
                    {/* <li className="f-list-ele"></li>
                    <li className="f-list-ele"></li>
                    <li className="f-list-ele"></li> */}
                </ul>
            </div>
            <div className="f-three-child">
                <ul className="f-list">
                    <li className="list-head">Products</li>
                    <li className="f-list-ele">Ecommerce</li>
                    <li className="f-list-ele">Sports</li>
                    <li className="f-list-ele">Services</li>
                    <li className="f-list-ele">Healthcare</li>
                    <li className="f-list-ele">Heavy Industry</li>
                </ul>
            </div>
            <div className="f-three-child">
            <ul className="f-list f-list-lastone ">
                    <li className="list-head">Contact Us</li>
                    {/* <li className="f-list-ele cutoff">&nbsp;</li> */}
                    <li className="f-list-ele"></li>
                    <li className="f-list-ele f-l-e-over"><i className="fa-brands fa-instagram f-icon"></i></li>
                    {/* <li className="f-list-ele cutoff">&nbsp;</li> */}
                    <li className="f-list-ele f-l-e-over"><i className="fa-brands fa-linkedin f-icon"></i></li>
                </ul>
            </div>
            <div className="f-three-child">
            <ul className="f-list f-list-lastone">
                    <li className="list-head cutoff">&nbsp;</li>
                    {/* <li className="f-list-ele cutoff">&nbsp;</li> */}
                    <li className="f-list-ele cutoff"></li>
                    <li className="f-list-ele "><i className="fa-brands fa-facebook f-icon"></i></li>
                    {/* <li className="f-list-ele cutoff">&nbsp;</li> */}
                    <li className="f-list-ele"><i className="fa-solid fa-envelope f-icon"></i></li>
                </ul>
            </div>
        </div>
        <p className='f-last-p'>&#169;  2022  Myknot.com</p>
        </div>
</div>

   </>
  )
}

export default Footer
