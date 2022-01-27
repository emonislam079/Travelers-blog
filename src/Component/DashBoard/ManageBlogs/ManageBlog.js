import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import './ManageBlogs.css'

const ManageBlog = ({blog}) => {
    return (
        <Col xs={12} md={12} className="Blogs-box p-3">
            <Row>
              <Col xs={12} md={8} className="Blogs-text ps-4">
                <div>
                  <h4 className='text-start text-secondary mt-3'>{blog.PersonName}</h4>
                  <h3 className="fs-1 text-success">{blog.date} <small className="text-success fs-4 ">{blog.month}</small></h3>
                  <h1 className='text-start'>{blog.name}</h1>
                  <h6 className="text-secondary"> <i class="fas fa-map-marker-alt"></i> {blog.location}</h6>
                <hr />
                <p>{blog.details}</p>
                <h4 className='text-start'>Rating :  
                <Rating 
                className='text-success'
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                readonly
                initialRating={blog.Rating}/></h4>
                <Button>Update</Button> <Button>Delete</Button>
                </div>
                
              </Col>
              <Col
                xs={12}
                md={4}
                style={{ paddingLeft: "0px", paddingRight: "0px" }}
              >
                <img src={blog.img} alt="" />
              </Col>
              
            </Row>
          </Col>
    );
};

export default ManageBlog;