import React from 'react';
import Img1 from './../compufetimages/com1fet.jpg';
import { Link } from 'react-router-dom';

function ModalTwo(addToCard) {
  return (
    <div>
        <section className='modaltwo-section'>
            <div className="modaltwo-container">
                <img className='modaltwo-img' src={Img1}/>
                <h2 className="titleh2">Descripcion del producto</h2>
                <p className="paramodaltwo">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sit aliquam deserunt incidunt impedit? Facilis minima quo vel veniam facere. Vel consequatur dolorum blanditiis minima doloribus illum, libero quo quibusdam?
                </p>
                <div className="btnsmodaltwo">
                    <a className="a-modaltwo" href="#">Volver</a>
                    <a onClick={addToCard} className="a-modaltwo2" href="#">Agregar</a>
                </div>
                <Link className="close-modaltwo" to="/Tienda">&times;</Link>
            </div>
        </section>
    </div>
  )
}

export default ModalTwo