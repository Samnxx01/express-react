import React from 'react';
import PastelImg005 from './../../../PastelImg/pastch006.jpg';
import { Link } from 'react-router-dom';

function CardsPast() {
  return (
    <div>
        <div className="container004">
        <Link to="produ" className="link-card001">
        <div className="card-1 card-div">
            <div className="gow-img-div img-div">
                <img src={PastelImg005} alt="god-of-war-figurine"/>
            </div>
            <div className="text-container">
                <h2 className="item-name">Pastel de Chocolate</h2>
                {/* <p className="date"> Departure date: 31/03/2021 </p> */}
                <div className="pricing-and-cart">
                    <div className="pricing">
                        {/* <p className="previous-price">$999</p> */}
                        <p className="current-price">$599</p>
                    </div>
                    {/* <i className="fas fa-shopping-cart"></i> */}
                </div>
            </div>
        </div>
        </Link>
        <Link to="produ" className="link-card001">
        <div className="card-2 card-div">
            <div className="sekiro-img-div img-div">
                <img src={PastelImg005} alt="sekiro-figurine"/>
            </div>
            <div className="text-container">
                <h2 className="item-name">Pastel de Fresas</h2>
                {/* <p className="date"> Departure date: 31/03/2021 </p> */}
                <div className="pricing-and-cart">
                    <div className="pricing">
                        {/* <p className="previous-price">$999</p> */}
                        <p className="current-price">$799</p>
                    </div>
                    {/* <i className="fas fa-shopping-cart"></i> */}
                </div>
            </div>
        </div>
        </Link>
        <Link to="produ" className="link-card001">
        <div className="card-3 card-div">
            <div className="dazai-img-div img-div">
                <img src={PastelImg005} alt="sekiro-figurine"/>
            </div>
            <div className="text-container">
                <h2 className="item-name">Pastel de Maracuya</h2>
                {/* <p className="date"> Departure date: 31/03/2021 </p> */}
                <div className="pricing-and-cart">
                    <div className="pricing">
                        {/* <p className="previous-price">$449</p> */}
                        <p className="current-price">$279</p>
                    </div>
                    {/* <i className="fas fa-shopping-cart"></i> */}
                </div>
            </div>
        </div>
        </Link>
        <Link to="produ" className="link-card001">
        <div className="card-4 card-div">
            <div className="u4-img-div img-div">
                <img src={PastelImg005} alt="u4-figurine"/>
            </div>
            <div className="text-container">
                <h2 className="item-name">Pastel de Vainilla</h2>
                {/* <p className="date"> Departure date: 31/03/2021 </p> */}
                <div className="pricing-and-cart">
                    <div className="pricing">
                        {/* <p className="previous-price">$759</p> */}
                        <p className="current-price">$499</p>
                    </div>
                    {/* <i className="fas fa-shopping-cart"></i> */}
                </div>
            </div>
        </div>
        </Link>
    </div>
    </div>
  )
}

export default CardsPast

// https://codepen.io/gerrardcss/pen/OJjQjWr