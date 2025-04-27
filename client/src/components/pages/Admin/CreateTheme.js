import React, { useEffect, useState } from "react";
import "../../css/admin/createtheme.css";

const CreateTheme = () => {
  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(9999);
  const [category, setCategory] = useState("");
  const [siteurl, setSiteUrl] = useState("");
  const [categoryarray,setCategoryarray]=useState()

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    // const file=e.target.files
    // console.log("FILE",file)
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => [setPreviewSource(reader.result)];
  };

  const handelSubmitFile = (e) => {
    console.log("submitting");
    e.preventDefault();
    if (!previewSource) {
      return;
    }
    uploadImage(previewSource);
  };

  async function createTheme(imgurl) {
    try {
      await fetch(
        // "https://myknot-official.herokuapp.com/api/themes/createtheme",
        // "http://localhost:3001/api/themes/createtheme",
        "https://myknot-official.vercel.app/api/themes/createtheme",
        {
          method: "POST",
          body: JSON.stringify({
            img: imgurl,
            title,
            description,
            category,
            price,
            siteurl,
          }),
          headers: { "Content-type": "application/json" },
        }
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          return data;
        })
        .catch((error) => {
          return error;
        });
    } catch (error) {
      console.log(error);
    }
  }

  const uploadImage = async (base64EncodedImage) => {
    // console.log(base64EncodedImage)
    try {
      // await fetch("https://myknot-official.herokuapp.com/api/img/upload", {
      // await fetch("http://localhost:3001/api/img/upload", {
      await fetch("https://myknot-official.vercel.app/api/img/upload", {
        method: "POST",
        body: JSON.stringify({ data: base64EncodedImage }),
        headers: { "Content-type": "application/json" },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log("is url", data);
          createTheme(data.uploadedResponse);
        })
        .catch((error) => [console.log(error)]);
    } catch (error) {
      console.log(error);
    }
  };


  async function getAllCategories(){
    // await fetch("http://localhost:3001/api/category/getallcategories",{
    await fetch("https://myknot-official.vercel.app/api/category/getallcategories",{
      method:"GET",
      headers: { "Content-type": "application/json" }
    }).then((res)=>{
      return res.json()
    }).then((data)=>{
      if(data.success===true){
        setCategoryarray(data.categories)
        console.log(categoryarray)
      }
    }).catch((error)=>{
      console.log(error)
    })
  }

  useEffect(()=>{
    getAllCategories()
  },[])

  return (
    <>
      <div className="ctheme-one">
        <h1 className="ctheme-h1">Add Theme</h1>
        <div className="ctheme-two">
          <div className="ctheme-two-child1">
            <input
              type="text"
              className="ctheme-input1"
              placeholder="Theme Title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <input
              type="text"
              className="ctheme-input1"
              placeholder="Description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <input
              type="text"
              className="ctheme-input1"
              placeholder="Price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            <input
              type="text"
              className="ctheme-input1"
              placeholder="Theme Url"
              value={siteurl}
              onChange={(e) => {
                setSiteUrl(e.target.value);
              }}
            />
            <div className="ctheme-dropdown">
              <button className="ctheme-btn">Category</button>
              <div className="ctheme-dropdown-content">
                {categoryarray?categoryarray.map((ele, index) => {
                  return (
                    <>
                      <p
                        className="ctheme-p1"
                        onClick={() => {
                          setCategory(`${ele.name}`);
                        }} key={index}
                      >
                        {ele.name}
                      </p>
                    </>
                  );
                }):null}
                
              </div>
            </div>
            <p
              style={{
                textAlign: "center",
                marginBottom: "0",
                marginTop: "29px",
              }}
            >
              Choosen Category : {category}
            </p>
            <input
              type="file"
              className="ctheme-input2"
              value={fileInputState}
              onChange={(e) => {
                handleFileInputChange(e);
              }}
            />
          </div>
          <div className="ctheme-two-child1">
            {previewSource && (
              <img
                src={previewSource}
                alt="Please choose file to preview"
                className="ctheme-img1"
              />
            )}
          </div>
        </div>
        <button
          className="ctheme-btn2"
          onClick={(e) => {
            handelSubmitFile(e);
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default CreateTheme;
