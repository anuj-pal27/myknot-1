import React, { useContext, useState } from "react";
import "../../css/admin/orders.css";
import Appcontext from "../../context/Appcontext";

const Productlist = () => {
  const mainstate = useContext(Appcontext);
  let count = 0;

  const [title,setTitle]=useState();
  const [price,setPrice]=useState();
  const [category,setCategory]=useState();
  const [description,setDescription]=useState()
  const [themeid,setThemeid]=useState()
  const [upscreen,setUpscreen]=useState(false)

  async function themeUpdater(theme){
    setUpscreen(true)
    setTitle(theme.title)
    setPrice(theme.price)
    setCategory(theme.category)
    setDescription(theme.description)
    setThemeid(theme._id)
  }

  async function updateTheme(themeID){
    try {
      
      await fetch(`https://myknot-official.vercel.app/api/themes/getonetheme`, {
      // await fetch(`http://localhost:3001/api/themes/getonetheme`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          themeID: themeID,
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data.theme);
          if(data.success===true){themeUpdater(data.theme)}
        })
        .catch((error) => {
          console.log(error);
        });

    } catch (error) {
      console.log(error)
    }
  }

  async function deleteTheme(themeID){
    try {
       if(themeID){
        await fetch("https://myknot-official.vercel.app/api/themes/deletetheme",{
        // await fetch("http://localhost:3001/api/themes/deletetheme",{
            method:"DELETE",
            headers: { "Content-type": "application/json",themeID },
        }).then((res)=>{
            return res.json()
        }).then((data)=>{
            console.log(data)
        }).catch((error)=>{
            console.log(error)
        })
       }else{
        console.warn("theme not selected")
        return
       }
    } catch (error) {
        console.log(error)
    }
  }

  async function submitHandlerUpdate(){
    try {
      
      await fetch(`https://myknot-official.vercel.app/api/themes/updatetheme`, {
      // await fetch(`http://localhost:3001/api/themes/updatetheme`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          themeID: themeid,
        },
        body:JSON.stringify({
          title,price,description,category
        })
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          if(data.success==true){setUpscreen(false);
          setCategory(null) ;setDescription(null) ;setPrice(null); setThemeid(null);}
        })
        .catch((error) => {
          console.log(error);
        });

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="o-one">
        <h1 className="table-hone">Products</h1>
        <div className="o-two">
         {
          upscreen? <div className="up-screen">
          <input type="text" placeholder="Title" className="up-input" value={title} style={{"marginTop":"61px"}} onChange={(e)=>{
            setTitle(e.target.value)
          }}/>
          <input type="text" placeholder="Description" className="up-input" value={description} onChange={(e)=>{
            setDescription(e.target.value)
          }} />
          <input type="text" placeholder="Category"  className="up-input" value={category} onChange={(e)=>{
            setCategory(e.target.value)
          }}/>
          <input type="number" placeholder="Price" className="up-input" value={price} onChange={(e)=>{
            setPrice(e.target.value)
          }}/>
          <button className="up-btn" onClick={()=>{
            submitHandlerUpdate()
          }}>Submit</button>
          <button className="up-btn" style={{"marginLeft":"49px"}} onClick={()=>{
            setUpscreen(false)
          }}>Cancel</button>
        </div>:null
         }
          <table className="o-table-control">
            <tr className="o-table-header">
              <th className="o-table-heading">Sl no</th>
              <th className="o-table-heading">Name of Product</th>
              <th className="o-table-heading">Category</th>
              <th className="o-table-heading">Item Price</th>
              <th className="o-table-heading">Preview</th>
              {/* <th className="o-table-heading">Status</th> */}
              <th className="o-table-heading">Options</th>
            </tr>
           {
            upscreen ? null :<>
             {mainstate.themes
              ? mainstate.themes.map((ele, index) => {
                  return (
                    <>
                      <tr className="o-table-child-row1" key={index}>
                        <td className="o-table-data">{++count}</td>
                        <td className="o-table-data ">{ele.title}</td>
                        <td className="o-table-data">{ele.category}</td>
                        <td className="o-table-data">{ele.price}</td>
                        <td className="o-table-data">
                          <button>
                            <a
                              href={`${ele.siteurl}`}
                              target="_blank"
                              style={{ color: "black" }}
                            >
                              View
                            </a>
                          </button>
                        </td>
                        {/* <td className="o-table-data o-table-data-process">PROCESSING</td> */}
                        <td className="o-table-data">
                          <p className="table-p1">
                            <i className="bi bi-pencil-square table-icon1 table-icon-o1" onClick={()=>{
                                updateTheme(ele._id)
                            }} style={{"cursor":"pointer"}} ></i>
                            <i className="bi bi-trash3 table-icon1 table-icon-o2" onClick={()=>{
                                deleteTheme(ele._id)
                            }} style={{"cursor":"pointer"}}></i>
                          </p>
                        </td>
                      </tr>
                    </>
                  );
                })
              : null}
            </>
           }
          </table>
        </div>
      </div>
    </>
  );
};

export default Productlist;
