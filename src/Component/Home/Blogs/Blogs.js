import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Blog from './Blog';

const Blogs = () => {
    const [Blogs, setblog]= useState([]);
    useEffect(()=>{
        fetch('./EventData.JSON')
        .then(res => res.json())
        .then(data => setblog(data))
    }, [])
    return (
        <Container>
      <Row>
      {
            Blogs.map (blog=> <Blog
            key={blog.id}
            blog={blog}
            ></Blog>)
        }
          
      </Row>
    </Container>
    );
};

export default Blogs;