import React from 'react';
import Navbar from '../Navbar/Navbar';
import Img1 from './../compufetimages/com1fet.jpg';
import Img3 from './../compufetimages/com3fet.jpg';

function Info() {
  return (
    <div>
        <Navbar />
        <h1 className='h1001'>Pensamos, diseñamos y construimos</h1>
        <section className="about-container">
            <div className="about_text001">
                <h2 className="h2001">Misión</h2>
                <p className="text-mision">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Eius distinctio dolore accusantium consectetur animi totam praesentium, 
                    illum atque ipsam quisquam dignissimos minus ad cum ut nam, porro 
                    accusamus blanditiis vero?
                </p>
            </div>
            <figure className="about_img001">
                <img src={Img1} alt="" className="img003" />
            </figure>
            <figure className="about_img001 about_img001--left">
                <img src={Img3} alt="" className="img003" />
            </figure>
            <div className="about_text001">
                <h2 className="h2001">Visión</h2>
                <p className="text-mision">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Eius distinctio dolore accusantium consectetur animi totam praesentium, 
                    illum atque ipsam quisquam dignissimos minus ad cum ut nam, porro 
                    accusamus blanditiis vero?
                </p>
            </div>
        </section>
    </div>
  )
}

export default Info