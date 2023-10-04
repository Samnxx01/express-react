import React, { Fragment, useState } from 'react';
import NabvarPal from '../Navbar/NabvarPal';
// import $ from 'jquery';
import PastelImg004 from '../../../PastelImg/pastch004.jpg';
import PastelImg005 from '../../../PastelImg/pastch005.jpg';
import PastelImg006 from '../../../PastelImg/pastch006.jpg';
import CardsPast from './CardsPast';
import {FaPlayCircle, FaPauseCircle} from 'react-icons/fa';
// https://www.youtube.com/watch?v=3oIIS_hll2I
const CatPal = () => {
  const [playSlider, setPlaySlider] = useState(true);

  return (
    <Fragment>
      <div>
        <NabvarPal />
        <div className="slider-container">
          {playSlider
            ?
            <FaPauseCircle className="fa-icon1" onClick={() => setPlaySlider(!playSlider)} />
            :
            <FaPlayCircle className="fa-icon1" onClick={() => setPlaySlider(!playSlider)} />

          }
          <div className={playSlider ? "slider play-run" : "slider play-stop"}>
            <div className='slider-past'>
              <img src={PastelImg004} alt="slide1" />
            </div>
            <div className='slider-past'>
              <img src={PastelImg005} alt="slide1" />
            </div>
            <div className='slider-past'>
              <img src={PastelImg006} alt="slide1" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="grid-container">
          <div className='grid-item1'>
            <div className="box-grid">
              <input type="text" placeholder="Buscar..." className="search-past" name="" id="" />
              <a href="#" className="btn-search">
                <i className='fa-solid fa-magnifying-glass'></i>
              </a>
            </div>
            <div>
              <h3 className='h3001'>Filtrar</h3>
              <div className="div-down">
                <div className="container-down">
                  <div className="row-down">
                    <p>Primero</p>
                    <label className='label-down'>
                      <input type="checkbox" className='input-down' />
                      <span className='span-down'></span>
                    </label>
                  </div>
                  <div className="row-down">
                    <p>Segundo</p>
                    <label className='label-down'>
                      <input type="checkbox" className='input-down' />
                      <span className='span-down'></span>
                    </label>
                  </div>
                  <div className="row-down">
                    <p>Tercero</p>
                    <label className='label-down'>
                      <input type="checkbox" className='input-down' />
                      <span className='span-down'></span>
                    </label>
                  </div>
                  <div className="row-down">
                    <p>Cuarto</p>
                    <label className='label-down'>
                      <input type="checkbox" className='input-down' />
                      <span className='span-down'></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='grid-item2'>
            <CardsPast />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default CatPal

// https://www.youtube.com/watch?v=VZR0m5F4lWI
// https://www.youtube.com/watch?v=KROfo7vuIGY
// https://www.youtube.com/watch?v=kKrkQcpo-rE
// function dropdownexe() {
//   document.querySelectorAll("dropdown-down").forEach(dropdown => {
//     const select = dropdown.querySelector(".select-down");
//     const selected = dropdown.querySelector(".selected-down");
//     const caret = dropdown.querySelector(".caret-down");
//     const menu = dropdown.querySelector(".menu-down");
//     const options = dropdown.querySelector(".menu-down li");


//     select.addEventListener('click', () => {
//       select.classList.toggle('select-clicked');

//       caret.classList.toggle('caret-rotate');

//       menu.classList.toggle('menu-open-down');
//     });

//     options.forEach(option => {
//       option.addEventListener('click', () => {
//         selected.innerText = option.innerText;

//         selected.classList.remove('select-clicked');

//         caret.classList.remove('caret-rotate');

//         menu.classList.remove('menu-open-down');

//         options.forEach(option => {
//           option.classList.remove('active-down');
//         });

//         option.classList.add('active-down')
//       });
//     });
//   });
// }
// CSS
/* Dropdown */
// .container-down {
//   min-height: 100vh;
//   display: flex;
//   justify-content: right;
//   align-items: start;
//   flex-wrap: wrap;
// }

// .dropdown-down {
//   min-width: 15em;
//   position: relative;
//   margin: 2em;
// }

// .dropdown-down * {
//   box-sizing: border-box;
// }

// .select-down {
//   background: #2a2f3b;
//   color: #fff;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   border: 2px #2a2f3b solid;
//   border-radius: 0.5em;
//   padding: 1em;
//   cursor: pointer;
//   transition: background 0.3s;
// }

// /* Ajustes en js de Dropdown */
// .select-clicked {
//   border: 2px #26489a solid;
//   box-shadow: 0 0 0.8em #26489a;
// }

// .select-down:hover {
//   background: #323741;
// }

// .caret-down {
//   width: 0px;
//   height: 0px;
//   border-left: 5px solid transparent;
//   border-right: 5px solid transparent;
//   border-top: 6px solid white;
//   transition: 0.3s;
// }

// /* Rotación "función js" */
// .caret-rotate {
//   transform: rotate(180deg);
// }

// .menu-down {
//   list-style: none;
//   padding: 0.2em 0.5em;
//   background: #323741;
//   border: 1px #363a43 solid;
//   box-shadow: 0 0.5em 1em rgba(0, 0, 0, .2);
//   border-radius: 0.5em;
//   color: #9fa5b5;
//   position: absolute;
//   top: 3em;
//   left: 50%;
//   width: 100%;
//   transform: translateX(-50%);
//   opacity: 0;
//   display: none;
//   transition: 0.2s;
//   z-index: 1;
// }

// .menu-down li {
//   padding: 0.7em;
//   margin: 0.3em 0px;
//   border-radius: 0.5em;
//   cursor: pointer;
// }

// .menu-down li:hover {
//   background: #2a2a35;
// }

// .active-down {
//   background: #23242a;
// }

// .menu-open-down {
//   display: block;
//   opacity: 1;
// }
// HTML
{/* <div className='container-down'>
              <h3> Filtrar por Categoría</h3>
              <div className="dropdown-down">
                <a onClick={dropdownexe}>
                <div className="select-down">
                  <span className="selected-down">Seleccionar</span>
                  <div className="caret-down">
                    <ul className="menu-down">
                      <li className='active-down'>Seleccionar</li>
                      <li>Primero</li>
                      <li>Segundo</li>
                      <li>Tercero</li>
                    </ul>
                  </div>
                </div>
                </a>
              </div>
            </div> */}
// De slider automatico
// useEffect(() => {
//   $('.slider').each(function () {
//     var $this = $(this);
//     var $group = $this.find('.slide_group');
//     var $slides = $this.find('.slide');
//     var bulletArray = [];
//     var currentIndex = 0;
//     var timeout;

//     // Function to move to a new slide
//     function move(newIndex) {
//       var animateLeft, slideLeft;

//       // Call advance function to reset timeout
//       advance();

//       if ($group.is(':animated') || currentIndex === newIndex) {
//         return;
//       }

//       // Update bullet classes to indicate the active slide
//       bulletArray[currentIndex].removeClass('active');
//       bulletArray[newIndex].addClass('active');
//       // Determine animation direction based on newIndex and currentIndex
//       if (newIndex > currentIndex) {
//         slideLeft = '100%';
//         animateLeft = '-100%';
//       } else {
//         slideLeft = '-100%';
//         animateLeft = '100%';
//       }

//       // Position new slide
//       $slides.eq(newIndex).css({
//         display: 'block',
//         left: slideLeft
//       });
//       // Animate the slide group
//       $group.animate({
//         left: animateLeft
//       }, function () {
//         // Hide the previous slide and reset positions
//         $slides.eq(currentIndex).css({
//           display: 'none'
//         });
//         $slides.eq(newIndex).css({
//           left: 0
//         });
//         $group.css({
//           left: 0
//         });

//         // Update the current index
//         currentIndex = newIndex;

//         // Get the URL of the new slide's image
//         var newSlideImage = $slides.eq(newIndex).css('background-image');
//         // Set the background image of both the slider and the body
//         $this.css({
//           backgroundImage: newSlideImage
//         });
//         $('body').css({
//           backgroundImage: newSlideImage
//         });
//       });
//     }

//     // Function to advance to the next slide
//     function advance() {
//       clearTimeout(timeout);
//       timeout = setTimeout(function () {
//         if (currentIndex < ($slides.length - 1)) {
//           move(currentIndex + 1);
//         } else {
//           move(0);
//         }
//       }, 4000);
//     }

//     // Handle next button click
//     $('.next_btn').on('click', function () {
//       if (currentIndex < ($slides.length - 1)) {
//         move(currentIndex + 1);
//       } else {
//         move(0);
//       }
//     });

//     // Handle previous button click
//     $('.previous_btn').on('click', function () {
//       if (currentIndex !== 0) {
//         move(currentIndex - 1);
//       } else {
//         move(3);
//       }
//     });

//     // Create slide buttons and handle click events
//     $.each($slides, function (index) {
//       var $button = $('<a class="slide_btn">&bull;</a>');

//       if (index === currentIndex) {
//         $button.addClass('active');
//       }
//       $button.on('click', function () {
//         move(index);
//       }).appendTo('.slide_buttons');
//       bulletArray.push($button);
//     });

//     // Start advancing slides
//     advance();
//   });
// });
{/* <div className='container002'>
          <div className="slider">
            <div className="slide_viewer">
              <div className="slide_group">
                <div className="slide">
                </div>
                <div className="slide">
                </div>
                <div className="slide">
                </div>
              </div>
            </div>
          </div>
          <div className="slide_buttons">
          </div>
          <div className="directional_nav">
            <div className="previous_btn" title='Atrás'>
              <i className="fa-solid fa-backward fa-5x" style={{ color: 'black' }}></i>
            </div>
            <div className="next_btn" title='Adelante'>
              <i className="fa-solid fa-forward fa-5x" style={{ color: 'black' }}></i>
            </div>
          </div>
        </div> */}
        /* SLIDER */
// .container002 {
//   height: 100%;
//   margin: 25px auto;
//   padding: 0px;
//   width: 100%;
//   overflow: hidden;
// }

// .slider {
//   margin: 30px auto 0px auto;
//   width: 92%;
//   max-width: 940px;
//   border-radius: 30px;
//   border: 0.1px solid rgb(134, 133, 133);
// }

// .slide_viewer {
//   height: 90vh;
//   overflow: hidden;
//   position: relative;
//   border-radius: 30px;
// }

// .slide_group {
//   height: 100%;
//   position: relative;
//   width: 100%;
// }

// .slide {
//   display: none;
//   height: 100%;
//   position: absolute;
//   width: 100%;
//   border-radius: 30px;
// }

// .slide:first-child {
//   display: block;
// }

// .slide:nth-of-type(1) {
//   background: url('./PastelImg/pastch004.jpg');
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;


// }

// .slide:nth-of-type(2) {
//   background: url('./PastelImg/pastch005.jpg');
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
// }

// .slide:nth-of-type(3) {
//   background: url('./PastelImg/pastch006.jpg');
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
// }

// .slide_buttons {
//   left: 0;
//   position: absolute;
//   right: 0;
//   text-align: center;
// }

// a.slide_btn {
//   color: #474544;
//   font-size: 42px;
//   margin: 0 0.175em;
//   -webkit-transition: all 0.4s ease-in-out;
//   -moz-transition: all 0.4s ease-in-out;
//   -ms-transition: all 0.4s ease-in-out;
//   -o-transition: all 0.4s ease-in-out;
//   transition: all 0.4s ease-in-out;
// }

// .slide_btn.active,
// .slide_btn:hover {
//   color: #ffffff;
//   cursor: pointer;
// }

// .directional_nav {
//   /* height: 90vh; */
//   margin: 0 auto;
//   position: relative;
//   top: -50vh;
//   width: 100%;
// }

// .previous_btn {
//   bottom: 0;
//   left: 100px;
//   margin: auto;
//   position: absolute;
//   top: 0;
//   size: 50px;
// }

// .next_btn {
//   bottom: 0;
//   margin: auto;
//   position: absolute;
//   right: 100px;
//   top: 0;
// }

// .previous_btn,
// .next_btn {
//   cursor: pointer;
//   height: 65px;
//   opacity: 0.7;
//   -webkit-transition: opacity 0.4s ease-in-out;
//   -moz-transition: opacity 0.4s ease-in-out;
//   -ms-transition: opacity 0.4s ease-in-out;
//   -o-transition: opacity 0.4s ease-in-out;
//   transition: opacity 0.4s ease-in-out;
//   width: 65px;
// }

// .previous_btn:hover,
// .next_btn:hover {
//   opacity: 1;
// }

// @media only screen and (max-width: 767px) {
//   .previous_btn {
//     left: 50px;
//   }

//   .next_btn {
//     right: 50px;
//   }
// }