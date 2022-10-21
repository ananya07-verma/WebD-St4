import React, { Component } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
import Swiper, { SwiperOptions } from "swiper";
import Navbar from '../components/Navbar.js';
//import Footer from '../components/Footer.js';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap"
import homevideo from '../pages/bg/homevideo.mp4';
class Home extends Component {

    render() {
        // var swiper = new Swiper(".mySwiper", {
        //     direction: "vertical",
        //     loop: true,
        //     pagination: {
        //         el: ".swiper-pagination",
        //         clickable: true,
        //     },
        //     autoplay: {
        //         delay: 3500,
        //     },
        // });

        return (
            <div>

                <Navbar />
                <h1>The Deluxe Villa</h1>
                <video className='videoTag' autoPlay loop muted>
                    <source src={homevideo} type='video/mp4' />
                </video>

                {/* <div className="container">
                    <h2>Home Page</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div> */}
                {/* <div className="bg-containter">

                    <video className='videoTag' autoPlay loop muted>
                        <source src={bg1} type='video/mp4' />
                    </video>
                </div> */}
                {/* <section id="home" class="banner_wrapper p-0">
                    <div class="swiper mySwiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" style={{ backgroundImage: "url(images/Slider1.jpg)" }}>
                                <div class="slide-caption text-center">
                                    <div>

                                        <h1>Welcome to the Resort</h1>
                                        <p>Dummyyy text</p>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide" style={{ backgroundImage: "url(images/slider2.jpg)" }}>
                                <div class="slide-caption text-center">
                                    <div>

                                        <h1>Welcome to the Resort</h1>
                                        <p>Dummyyy text</p>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                </section> */}
                {/* <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://smartvocab.in/vocab-api/common-images/pwxabpyb15r8f67o.jpg?v=1"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='caraousel-item'>
                        <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc29ydHxlbnwwfHwwfHw%3D&w=1000&q=80"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='caraousel-item'>
                        <img
                            className="d-block w-100"
                            src="https://wallpapercave.com/wp/wp8725603.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel> */}
                {/* <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://smartvocab.in/vocab-api/common-images/pwxabpyb15r8f67o.jpg?v=1" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc29ydHxlbnwwfHwwfHw%3D&w=1000&q=80" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item ">
                            <img src="https://wallpapercave.com/wp/wp8725603.jpg" class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div> */}
            </div>

        );
    }
}


export default Home;
