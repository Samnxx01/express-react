import React from 'react'
import Cardone from './Cardone'

function Card() {
    return (
        <div className='fondo1'>
            <main className="page-content001">
                <div className="card001">
                    <div className="content001">
                        <h2 className="title001">Mountain View</h2>
                        <p className="copy001">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p>
                        <button className="btn001">View Trips</button>
                    </div>
                </div>
                <div className="card001">
                    <div className="content001">
                        <h2 className="title001">To The Beach</h2>
                        <p className="copy001">Plan your next beach trip with these fabulous destinations</p>
                        <button className="btn001">View Trips</button>
                    </div>
                </div>
                <div className="card001">
                    <div className="content001">
                        <h2 className="title001">Desert Destinations</h2>
                        <p className="copy001">It's the desert you've always dreamed of</p>
                        <button className="btn001">Book Now</button>
                    </div>
                </div>
                <div className="card001">
                    <div className="content001">
                        <h2 className="title001">Explore The Galaxy</h2>
                        <p className="copy001">Seriously, straight up, just blast off into outer space today</p>
                        <button className="btn001">Book Now</button>
                    </div>
                </div>
            </main>
            <Cardone />
        </div>
    )
}

export default Card

// https://codepen.io/hexagoncircle/pen/XWbWKwL
// https://devsnap.me/css-cards