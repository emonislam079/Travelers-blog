import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import Rating from 'react-rating';

const TopRated = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <>
      <Button className='mt-5 ms-5 d-flex align-content-start ' variant="primary" onClick={handleShow}>
        Top Rated Place
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Top Rated Place</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
                <div className="row row-cols-1 row-cols-md-1 g-4">
                        <div className="col">
                            <div className="card">
                            <img src="https://i.ibb.co/yVXdLff/slide1.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">The Grand Canyon.</h5>
                                <Rating 
                                        className='text-success text-center'
                                        fullSymbol="fas fa-star"
                                        readonly
                                        initialRating={5}/>
                            </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                            <img src="https://i.ibb.co/Tg3QVxt/slide2.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Colosseum, Rome.</h5>
                                <Rating 
                                        className='text-success text-center'
                                        fullSymbol="fas fa-star"
                                        readonly
                                        initialRating={5}/>
                            </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                            <img src="https://i.ibb.co/6WZF2xL/slide3.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Machu Picchu, Peru</h5>
                                <Rating 
                                        className='text-success text-center'
                                        fullSymbol="fas fa-star"
                                        readonly
                                        initialRating={5}/>
                            </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                            <img src="https://i.insider.com/5d3878bb36e03c348c7cfcd6?width=1000&format=jpeg&auto=webp" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Paris, France - The City of Lights</h5>
                                <Rating 
                                        className='text-success text-center'
                                        fullSymbol="fas fa-star"
                                        readonly
                                        initialRating={5}/>
                            </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                            <img src="https://www.hellomagazine.com/imagenes/travel/201707079115/iconic-photographs-travel/0-212-54/egypt-t.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Bora Bora, French-Polynesia</h5>
                                <Rating 
                                        className='text-success text-center'
                                        fullSymbol="fas fa-star"
                                        readonly
                                        initialRating={5}/>
                            </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                            <img src="https://i.insider.com/5d3896e336e03c548d2a598a?width=750&format=jpeg&auto=webp" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">The Grand Canyon.</h5>
                                <Rating 
                                        className='text-success text-center'
                                        fullSymbol="fas fa-star"
                                        readonly
                                        initialRating={5}/>
                            </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                            <img src="https://2.bp.blogspot.com/_IfHKdZwDktA/SWeBa_d9zLI/AAAAAAAAAP0/M-O5tqmQ5dU/w1200-h630-p-k-no-nu/lotus+temple.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Maldives</h5>
                                <Rating 
                                        className='text-success text-center'
                                        fullSymbol="fas fa-star"
                                        readonly
                                        initialRating={5}/>
                            </div>
                            </div>
                        </div>
                        </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
    );
};

export default TopRated;

