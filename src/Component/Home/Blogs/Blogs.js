import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Blog from './Blog';

const Blogs = () => {
    const [Blogs, setBlogs]= useState([]);
    useEffect(()=>{
        fetch('https://salty-shelf-64141.herokuapp.com/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data))
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