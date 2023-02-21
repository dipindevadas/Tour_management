import React from 'react'
import '../styles/home.css'
import { Container,Row,Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import experienceImg from '../assets/images/experience.png' 
import Subtitle from '../shared/Subtitle'

import Hero from '../components/Hero/Hero.jsx'

import worldImg from './../assets/images/world.png'
 import SearchBar from '../shared/SearchBar'
 import ServiceList from '../services/ServiceList'
 import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'
 import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery'
 import Testimonials from '../components/Testimonial/Testimonials'
import Newsletter from '../shared/Newsletter'

function Home() {
  return (
    <>
    <Hero></Hero>


    {/* <div id="hero">
        <div className="background">
            <video src={video} autoPlay type="video/mp4" ></video>
        </div>
        <div className="content">
            <div className="title">
                <h1>TRAVEL TO EXPLORE</h1>
                <p>
Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip.</p>
            </div>

            <div>
                <button >Explore Now</button>
            </div>
           
        </div>

    </div>
     */}

   
 

    {/* ========hero section start========= */}
    <section>
        
        <Container>
            <Row>
                <Col lg='6'>
                    <div className='hero__content'>
                        <div className='hero__subtitle d-flex align-items-center'>
                            <Subtitle  subtitle={'Know Before You Go'}></Subtitle>
                                <img src={worldImg} alt=""></img>
                        </div>
                       
                        <h1>Traveling opens the door to creating 
                            <span className='highlight'> memories</span>
                        </h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                        </p>
                        
                    </div>
                </Col>


                 <Col lg='2'>
                    <div className='hero__img-box'>
                        <img src={heroImg} alt="">

                        </img>

                    </div>
                </Col>
                <Col lg='2'>
                    <div className='hero__img-box mt-4 hero__video-box'>
                        <video autoPlay loop src={heroVideo} alt="" controls> </video>  
                    </div>
                </Col>
                <Col lg='2'>
                    <div className='hero__img-box mt-5'>
                        <img src={heroImg02} alt=""></img>
                    </div>
                </Col>

                <SearchBar></SearchBar>
            </Row>
        </Container>
    </section>

    {/* =====hero section start====== */}
    <section>
        <Container>
            <Row>
                <Col lg='3'>
                    <h5 className='services__subtitle'>What we serve</h5>
                    <h2 className='services__title'>We offer our best services</h2>
                </Col>

                <ServiceList></ServiceList>
            </Row>
        </Container>
    </section>




     {/* ==featured tour section=== */}
     <section>
        <Container>
            <Row>
                <Col lg='12' className='mb-5'>
                    <Subtitle subtitle={'Explore'}></Subtitle>
                    <h2 className='featured__tour-title'>Our featured tours</h2>
                </Col>
                <FeaturedTourList></FeaturedTourList>
            </Row>
        </Container>
     </section>

     {/* experience section starting */}

<section>
    <Container>
        <Row>
            <Col lg='6'>
                <div className='experience__content'>
                    <Subtitle subtitle={'Experience'}></Subtitle>
                    <h2>With our all experience <br/> we will serve you</h2>
                    <p>
                        lorem ipsum dolur sit amet, consectetur adipiscing elit.
                        <br/>
                        Quas aliquam, hic tempora inventore suscripit unde.
                    </p>
                </div>
                <div className='counter__wrapper d-flex align-items-center gap-5'>
                    <div className='counter__box'>
                        <span>12k+</span>
                        <h6>Successfull Trip</h6>
                    </div>
                    <div className='counter__box'>
                        <span>2k+</span>
                        <h6>Regular clients</h6>
                    </div>
                    <div className='counter__box'>
                        <span>15</span>
                        <h6>Years experience</h6>
                    </div>

                </div>

            </Col>

            <Col lg='6'>
                <div className='experience__img'>
                    <img src={experienceImg} alt=""></img>

                </div>
            </Col>
        </Row>
    </Container>
</section>
 {/* experience section end */}

 {/* =====gallery section start===== */}
  <section>
    <Container>
        <Row>
            <Col lg='12'>
                <subtitle subtitle={'Gallery'}></subtitle>
                <h2 className='gallery__title'>Visit our customers tour gallery</h2>

            </Col>
            <Col lg='12'>
            <MasonryImagesGallery></MasonryImagesGallery>
            </Col>
        </Row>
    </Container>
  </section>



 {/* =====gallery section start===== */}


 {/* =========testimonial section start */}

<section>
    <Container>
        <Row>
            <Col lg='12'>
                <Subtitle subtitle={'Fans Love'}></Subtitle>
                <h2 className='testimonial__title'>What our fans say about us</h2>

            </Col>
            <Col lg='12'>
                <Testimonials></Testimonials>
            </Col>
        </Row>
    </Container>
</section>

  {/* =========testimonial section end */}

   {/* =========newsletter section start */}
    <Newsletter></Newsletter>


    {/* =========newsletter section end */}

    </>
  )
}

export default Home