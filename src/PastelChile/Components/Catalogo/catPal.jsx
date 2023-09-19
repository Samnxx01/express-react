import React from 'react'
import NabvarPal from '../Navbar/NabvarPal';
import $ from 'jquery';
import CardsPast from './CardsPast';

function catPal() {
  $('.slider').each(function () {
  var $this = $(this);
  var $group = $this.find('.slide_group');
  var $slides = $this.find('.slide');
  var bulletArray = [];
  var currentIndex = 0;
  var timeout;

  // Function to move to a new slide
  function move(newIndex) {
    var animateLeft, slideLeft;

    // Call advance function to reset timeout
    advance();

    if ($group.is(':animated') || currentIndex === newIndex) {
      return;
    }

    // Update bullet classes to indicate the active slide
    bulletArray[currentIndex].removeClass('active');
    bulletArray[newIndex].addClass('active');
    // Determine animation direction based on newIndex and currentIndex
    if (newIndex > currentIndex) {
      slideLeft = '100%';
      animateLeft = '-100%';
    } else {
      slideLeft = '-100%';
      animateLeft = '100%';
    }

    // Position new slide
    $slides.eq(newIndex).css({
      display: 'block',
      left: slideLeft
    });
    // Animate the slide group
    $group.animate({
      left: animateLeft
    }, function () {
      // Hide the previous slide and reset positions
      $slides.eq(currentIndex).css({
        display: 'none'
      });
      $slides.eq(newIndex).css({
        left: 0
      });
      $group.css({
        left: 0
      });

      // Update the current index
      currentIndex = newIndex;

      // Get the URL of the new slide's image
      var newSlideImage = $slides.eq(newIndex).css('background-image');
      // Set the background image of both the slider and the body
      $this.css({
        backgroundImage: newSlideImage
      });
      $('body').css({
        backgroundImage: newSlideImage
      });
    });
  }

  // Function to advance to the next slide
  function advance() {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    }, 4000);
  }

  // Handle next button click
  $('.next_btn').on('click', function () {
    if (currentIndex < ($slides.length - 1)) {
      move(currentIndex + 1);
    } else {
      move(0);
    }
  });

  // Handle previous button click
  $('.previous_btn').on('click', function () {
    if (currentIndex !== 0) {
      move(currentIndex - 1);
    } else {
      move(3);
    }
  });

  // Create slide buttons and handle click events
  $.each($slides, function (index) {
    var $button = $('<a class="slide_btn">&bull;</a>');

    if (index === currentIndex) {
      $button.addClass('active');
    }
    $button.on('click', function () {
      move(index);
    }).appendTo('.slide_buttons');
    bulletArray.push($button);
  });

  // Start advancing slides
  advance();
});
  
  return (
    <div>
      <NabvarPal />
      <div className='container002'>
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
            <i className="fa-solid fa-backward fa-5x" style={{color: 'black'}}></i>
          </div>
          <div className="next_btn" title='Adelante'>
            <i className="fa-solid fa-forward fa-5x" style={{color: 'black'}}></i>
          </div>
        </div>
      </div>
      <div>
        <input type="search" name="" id="" />
      </div>
      <div>
        <CardsPast />
      </div>
    </div>
  )
}

export default catPal

// https://www.youtube.com/watch?v=VZR0m5F4lWI