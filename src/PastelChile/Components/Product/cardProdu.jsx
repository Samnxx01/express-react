import React from 'react';
import PastelImg099 from '../../../PastelImg/pastch099.jpg';


function cardProdu() {
  // document.querySelectorAll(".projcard-description").forEach(function(box) {
  //     $clamp(box, {clamp: 6});
  //   });   
  return (
    <fragment>
      <div class="projcard-container">

        <div class="projcard projcard-blue">
          <div class="projcard-innerbox">
            <img class="projcard-img" src={PastelImg099} alt='Imagen valoración'/>
            <div class="projcard-textbox">
              <div class="projcard-title">Comentarios acerca del producto</div>
              <div class="projcard-subtitle">Califica</div>
              <div class="projcard-bar"></div>
              <div class="projcard-description">Contenido del producto.</div>
              <div class="projcard-tagbox001">
                <div className="projcard-tagbox002">
                  <input type="radio" name="start5" id="" className='projcard-tagbox003' />
                  <input type="radio" name="start5" id="" className='projcard-tagbox003' />
                  <input type="radio" name="start5" id="" className='projcard-tagbox003' />
                  <input type="radio" name="start5" id="" className='projcard-tagbox003' />
                  <input type="radio" name="start5" id="" className='projcard-tagbox003' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </fragment>
  )
}

export default cardProdu

// https://medium.com/geekculture/33-blog-card-css-for-web-design-726a037217b5
// https://www.youtube.com/watch?app=desktop&v=tR5-3RY1kJg