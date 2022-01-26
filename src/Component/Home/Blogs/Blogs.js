import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import Blog from './Blog';

const Blogs = () => {
    const [Blogs, setBlogs]= useState([]);
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [displayBlogs, setDisplayBlogs] = useState([]);
    const size = 10;

    useEffect(()=>{
        fetch(`https://salty-shelf-64141.herokuapp.com/blogs?page=${page}&&size=${size}`)
        .then(res => res.json())
        .then(data => {
          setBlogs(data.Blogs);
          setDisplayBlogs(data.Blogs);
          const count = data.count;
              const pageNumber = Math.ceil(count / size);
              setPageCount(pageNumber);
        })
    }, [page])



    return (
        <Container>
      <Row>
      {
            displayBlogs.map (blog=> <Blog
            key={blog.id}
            blog={blog}
            ></Blog>)
        }
          
      </Row>
      <div className="pagination">
                        {
                            [...Array(pageCount).keys()]
                                .map(number => <Button
                                    className={number === page ? 'selected' : ''}
                                    key={number}
                                    onClick={() => setPage(number)}
                                >{number + 1}</Button>)
                        }
                    </div>
    </Container>
    );
};

export default Blogs;