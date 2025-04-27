import React from 'react'
import "../css/aboutus.css"
import "../css/home.css"
import founder from "../utils/img/founder3.jpg"
import Navbar from './Navbar'

const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <div className="abt-one">
    <div className="abt-two">
      <h1 className='abt-h1'>About us</h1>
    </div>
    <i className="fa-solid fa-shop abt-icon1"></i>
    </div>
    <div className="abt-three">
      <h2 className='abt-h2-1' data-aos="fade-up">Who we are </h2>
      <p className='abt-p-1' data-aos="fade-up">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque iure voluptates accusamus dolorum repellat laborum magnam rem quibusdam, praesentium ducimus consequatur omnis nam fugit distinctio pariatur minima porro illo enim odit hic recusandae. Ullam sequi, nemo quis cumque accusamus molestiae quidem quo unde quibusdam rem obcaecati esse molestias beatae illum eos voluptas ea minima. Eaque libero ducimus asperiores commodi fuga provident ipsam assumenda, quod sit incidunt totam dolorem distinctio! Laborum vitae aliquid amet, possimus debitis quisquam doloribus, a unde dolorum molestiae deserunt quasi, placeat vel. Eum consequatur repellat eos in, nulla, labore vitae eveniet sit quibusdam ipsa impedit sequi sunt?</p>
    </div>

    <div className="h-three setter">
        <div className="h-three-child" data-aos="fade-up" >
        <i className="fa-solid fa-user-tie d-icon" style={{"marginBottom":"22px"}}></i>
            <p className='h-three-p1'>24+</p>
            <p className='h-three-p2'>EMPLOYEES</p>
            </div>
        <div className="h-three-child"  data-aos="fade-up">
            <i className="bi bi-building d-icon"></i>
            <p className='h-three-p1'>2+</p>
            <p className='h-three-p2'>OFFICES</p>
            </div>
        <div className="h-three-child"  data-aos="fade-up">
        <i className="fa-solid fa-tree-city d-icon"></i>
            <p className='h-three-p1'>23+</p>
            <p className='h-three-p2'>CITIES</p>
        </div>
    </div>

    <div className="abt-four">
        <div className="abt-four-s">
          <h2 className="abt-h2-2" data-aos="fade-right">
            Our founding brains
          </h2>


          <div className="abt-four-s-2" data-aos="fade-right">
            <div className="abt-four-ss1">
              <img src={founder} alt="" className="abt-img1" />
            </div>
            <div className="abt-four-ss2">
              <p className="abt-p-2">
                Lorem ipsum.
              </p>
            <p className='abt-p-3'>Cofounder and CEO</p>
            <p className='abt-p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eos doloribus nam facere voluptas ratione sit saepe officia voluptates enim animi ipsam dolorem error quisquam doloremque aperiam labore repellendus officiis praesentium libero, quia fugit esse. mmodi asperiores voluptates tempore rerum dolor suscipit architecto quae optio quis ipsum officiis delectus!</p>
            </div>
          </div>


          <div className="abt-four-s-3" data-aos="fade-right">
            <div className="abt-four-ss1">
              <img src={founder} alt="" className="abt-img1" />
            </div>
            <div className="abt-four-ss2">
              <p className="abt-p-2">
                Lorem ipsum.
              </p>
            <p className='abt-p-3'>Cofounder and CTO</p>
            <p className='abt-p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eos doloribus nam facere voluptas ratione sit saepe officia voluptates enim animi ipsam dolorem error quisquam doloremque aperiam labore repellendus officiis praesentium libero, quia fugit esse. mmodi asperiores voluptates tempore rerum dolor suscipit architecto quae optio quis ipsum officiis delectus!</p>
            </div>
          </div>
        </div>
    </div>

    </>
  )
}

export default AboutUs
