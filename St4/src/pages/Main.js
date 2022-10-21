import React, { Component } from 'react';

import Navbar from '../components/Navbar.js';
import "./Main.css";

import bgvideo from '../pages/bg/bgvideo.mp4';


class Home extends Component {
    render() {
        return (
            <div>

                <Navbar />

                {/* <div className='home' style={{
                    backgroundImage: `url(<iframe src="https://giphy.com/embed/zoKdmndB8QBR2c0gjy" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/salesforce-confetti-success-customer-zoKdmndB8QBR2c0gjy">via GIPHY</a></p>)`
                }}></div> */}

                {/* <div>
                    <video className='videoTag' autoPlay loop muted>
                        <source src={bgvideo} type='video/mp4' />
                    </video>

                </div> */}

            </div>
        );
    }
}

export default Home;