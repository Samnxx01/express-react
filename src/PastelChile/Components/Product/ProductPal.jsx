import React from 'react';
import PastelImg002 from '../../../PastelImg/pastch002.jpg';
import NabvarPal from '../Navbar/NabvarPal';
import CardProdu from './cardProdu';

function ProductPal() {
  return (
    <div>
      <NabvarPal />
      <div className="container001">
        <div>
          <img className="img003" src={PastelImg002} alt='' />
        </div>
        <div className="text-002">
          <h1>Nombre  del Producto</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eaque explicabo quibusdam consequatur at harum, corrupti dolores, commodi omnis tenetur officia, ratione doloribus eligendi. Pariatur velit blanditiis explicabo suscipit alias.
          </p>
          <h5>Precio:<span>$ 25.50</span></h5>
        </div>
      </div>
      <div>
        <CardProdu />
      </div>
    </div>
  )
}

export default ProductPal