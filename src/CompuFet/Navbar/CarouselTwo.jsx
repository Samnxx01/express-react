import React from 'react';
import Img1 from './../compufetimages/com1fet.jpg';
import Img2 from './../compufetimages/com2fet.jpg';
import Img3 from './../compufetimages/com3fet.jpg';

function CarouselTwo() {
  return (
    <div className='container-todo'>
        <input type='radio' id='1' name='image-slide' hidden />
        <input type='radio' id='2' name='image-slide' hidden />
        <input type='radio' id='3' name='image-slide' hidden />
        <div className='slideone'>
            <div className='item-slideone'>
                <img className='imagone' src={Img1}/>
            </div>
            <div className='item-slideone'>
                <img className='imagone' src={Img2}/>
            </div>
            <div className='item-slideone'>
                <img className='imagone' src={Img3}/>
            </div>
        </div>
        <div className='pagone'>
            <label className='pagone-item' for='1'>
                <img className='imagone' src={Img1} />
            </label>
            <label className='pagone-item' for='2'>
                <img className='imagone' src={Img2} />
            </label>
            <label className='pagone-item' for='3'>
                <img className='imagone' src={Img3} />
            </label>

        </div>
    </div>
  )
}

export default CarouselTwo