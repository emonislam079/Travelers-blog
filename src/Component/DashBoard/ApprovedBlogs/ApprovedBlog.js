import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Rating from 'react-rating';

const ApprovedBlog = () => {
    const [blog, setblog] = useState({});
   



    useEffect(() => {
        const url = 'https://salty-shelf-64141.herokuapp.com/usersblogs';
        fetch(url)
            .then(res => res.json())
            .then(data => setblog(data));
    }, []);

    return (
        <Col xs={12} md={12} className="Blogs-box container">
        <Row>
          <Col xs={12} md={8} className="Blogs-text">
            <div>
              <h4 className='text-start text-secondary mt-3'>{blog.PersonName}</h4>
              <h3 className="fs-1 text-success">{blog.date} <small className="text-success fs-4 ">{blog.month}</small></h3>
              <h1 className='text-start'>{blog.name}</h1>
              <h6 className="text-secondary"> <i class="fas fa-map-marker-alt"></i> {blog.location}</h6>
            <hr />
            <p>{blog.details}</p>
            <h3 className='mb-3'>Cost : {blog.cost} <span className='ms-5'>Rating :  
            <Rating 
            className='text-success'
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
            readonly
            initialRating={blog.Rating}/></span></h3>
            </div>
            
          </Col>
          <Col
            xs={12}
            md={4}
            
          >
            <img src={blog.img} alt="" />
          </Col>
          
        </Row>
      </Col>
    );
};

export default ApprovedBlog;