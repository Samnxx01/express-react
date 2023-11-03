import React from 'react';
import PastelImg002 from '../../../PastelImg/pastch002.png';

function Footer() {
  return (
    <div className="div-footer">
    <footer className="footer-past">
        <div className="box-past">
            <h2 className="h2-past"> Menú </h2>
            <ul className="links-past">
                <li><a href="#"> Home </a></li>
                <li><a href="#"> Catalogo </a></li>
                <li><a href="#"> ¿Quienes Somos? </a></li>
                <li><a href="#"> Iniciar Sesión </a></li>                
            </ul>
        </div>
        <div className="box-past">
            <h2 className="h2-past">Allier Coffee y Cake </h2>
            <div>
                <img className="img001" src={PastelImg002}/>
            </div>
        </div>
        <div className="box-past">
            <h2 className="h2-past"> Contactos </h2>
            <p className="address">Cra 89 A 40-33<br></br>
                Chile
            </p>
            <ul className="social">
                <li><i className="fa-brands fa-facebook"></i></li>
                <li><i className="fa-brands fa-twitter"></i></li>
                <li><i className="fa-brands fa-instagram"></i></li>
                <li><i className="fa-brands fa-youtube"></i></li>
            </ul>
        </div>
    </footer>
    </div>
  )
}

export default Footer