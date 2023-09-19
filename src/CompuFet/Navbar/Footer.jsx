import React from 'react';
import { Link } from 'react-router-dom';
import Img4 from './../compufetimages/adobe45.svg';
import Img5 from './../compufetimages/adobe46.svg';
import Img6 from './../compufetimages/adobe48.svg';
import Img7 from './../compufetimages/comfet55.svg';
import Img8 from './../compufetimages/comfet57.svg';
import Img9 from './../compufetimages/comfet56.svg';

function Footer() {
  return (
    <div className='footer001'>
        <footer className='main-footer'>
            <div className="container-footer">
                <div className="section-footer wn000">
                    <h2 className="h2-footer">Acerca de</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, beatae molestias? Veritatis sit illo facilis officiis itaque ad ea nam nihil, corrupti dignissimos. Exercitationem ex, quo minima voluptatem autem officia.
                    </p>
                    <ul className="section005">
                        <li className="ele005"><a href="#"className="link006"><img src={Img4} className="icon005" /></a></li>
                        <li className="ele005"><a href="#"className="link006"><img src={Img5} className="icon005" /></a></li>
                        <li className="ele005"><a href="#"className="link006"><img src={Img6} className="icon005" /></a></li>
                    </ul>
                </div>
                <div className="section-footer wn001">
                <h2 className="h2-footer">Productos</h2>
                <ul>
                        <li className="ele005"><a href='#' className="link006" >HP</a></li>
                        <li className="ele005"><a href='#' className="link006" >Acer</a></li>
                        <li className="ele005"><a href='#' className="link006" >Lenovo</a></li>
                        <li className="ele005"><a href='#' className="link006" >Asus</a></li>
                        <li className="ele005"><a href='#' className="link006" >Dell</a></li>
                    </ul>
                </div>
                <div className="section-footer wn001">
                <h2 className="h2-footer">Quienes Somos</h2>
                <ul className="section001-footer">
                <li className="ele005"><Link to="/Compufet" className='link006'>Mision</Link></li>
                <li className="ele005"><Link to="/Compufet" className='link006'>Visión</Link></li>
                <li className="ele005"><Link to="/Compufet" className='link006'>Filosofía Organizacional</Link></li>
                <li className="ele005"><Link to="/Compufet" className='link006'>Valores</Link></li>
                    </ul>
                </div>
                <div className="section-footer wn002">
                <h2 className="h2-footer">Acerca de</h2>
                <ul className="section006">
                        <li className="ele005"><span className='span006'><img src={Img7} className="icon006" /></span>
                        <span className='span007'>Cra 7 # A 56-46</span>
                        </li>
                        <li className="ele005"><span className='span006'><img src={Img8} className="icon006" /></span>
                        <span className='span007'>3124729798</span>
                        <br />
                        <span className='span007'>3202669126</span>
                        </li>
                        <li className="ele005"><span className='span006'><img src={Img9} className="icon006" /></span>
                        <span className='span007'>juan_sanchezri@fet.edu.co</span>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
        <div className="copyright">
            <p>Copyright © 2023 FET. Todos los derechos están reservados.</p>
        </div>
    </div>
  )
}

export default Footer

// https://www.youtube.com/watch?v=g-HY5peTHcs