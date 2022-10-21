// import React, { Component } from 'react';
import React, { Component, useState } from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react';
import Navbar from '../components/Navbar.js';
// import './ContactUs.css';
import Login from './Login.js';



class ContactUs extends Component {

    render() {
        return (
            <div>
                <Navbar />

                {/* <div className="App">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        style={{ border: "0" }}
                        allowfullscreen=""
                        loading="lazy"
                    ></iframe>
                </div> */}
                {/* <div className="google-map-code">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" width="100%" height="100%" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div> */}

                {/* /* <div className="App">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        style={{ border: "0" }}
                        allowfullscreen=""
                        loading="lazy"
                    ></iframe>
                </div> */}
                <h1 className="head2">
                    We have got connections round the world , feel free to connect!
                </h1>
                {/* 
                <Login /> */}
                <div className="google-map-code">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" width="2000" height="1500" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    {/* <Login /> */}
                </div>

            </div>
        );
    }
}


export default ContactUs;
