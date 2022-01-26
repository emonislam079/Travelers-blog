import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/yVXdLff/slide1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    <h1 className='text-info fw-bold'>""Travel is not matter of </h1>
                        <h1 className='text-info fw-bold mb-4'>money But of Courage""</h1>
                        <Button variant="outline-info"><i className="fas fa-mouse-pointer"></i> KNOW MORE</Button>{' '}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/Tg3QVxt/slide2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h1 className='text-info fw-bold'>Travel makes one modest,</h1>
                        <h1 className='text-info fw-bold mb-4'>you see what a tiny place you occupy in the world</h1>
                    <Button variant="outline-info"> <i className="fas fa-mouse-pointer"></i> KNOW MORE</Button>{' '}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/6WZF2xL/slide3.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h1 className='text-info fw-bold'>Travel is fatal to prejudice, </h1>
                        <h1 className='text-info fw-bold mb-4'>bigotry, and narrow-mindedness.</h1>
                        <Button variant="outline-info"><i className="fas fa-mouse-pointer"></i> KNOW MORE</Button>{' '}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div >
    );
};

export default Banner;