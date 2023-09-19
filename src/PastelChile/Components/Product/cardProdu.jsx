import React from 'react';


function cardProdu() {
    // document.querySelectorAll(".projcard-description").forEach(function(box) {
    //     $clamp(box, {clamp: 6});
    //   });   
  return (
    <fragment>
        <div class="projcard-container">
    
    <div class="projcard projcard-blue">
      <div class="projcard-innerbox">
        <img class="projcard-img" src="https://picsum.photos/800/600?image=1041" />
        <div class="projcard-textbox">
          <div class="projcard-title">Card Title</div>
          <div class="projcard-subtitle">This explains the card in more detail</div>
          <div class="projcard-bar"></div>
          <div class="projcard-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
          <div class="projcard-tagbox">
            <span class="projcard-tag">HTML</span>
            <span class="projcard-tag">CSS</span>
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