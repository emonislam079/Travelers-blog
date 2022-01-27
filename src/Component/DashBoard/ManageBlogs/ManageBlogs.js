import React, { useEffect, useState } from 'react';
import { Button, Container, Nav, Row } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import ManageBlog from './ManageBlog';

const ManageBlogs = () => {
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
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-sm-3 text-start '>
                    <Nav defaultActiveKey="/dashboard" className="flex-column border mb-5">
                        <Nav.Link as={HashLink} to="/dashboard" className='bg-success text-white'> Important Links</Nav.Link>
                        <Nav.Link as={HashLink} to="/manageblogs" className='border-bottom'><i class="fas fa-paint-brush"></i> Manage Blogs</Nav.Link>
                        <Nav.Link as={HashLink} to="/approvedblogs" className='border-bottom'><i class="fas fa-paint-brush"></i> Approve Blogs</Nav.Link>
                        <Nav.Link as={HashLink} to="/makeadmin" className='border-bottom'><i class="fas fa-paint-brush"></i> Make Admin</Nav.Link>
                        <Nav.Link as={HashLink} to="/adminblogs" className='border-bottom'><i class="fas fa-paint-brush"></i> Add Blogs</Nav.Link>
                    </Nav>
                </div>
                <div className='col-sm-9'>
                
            <h1 className='fw-bold text-primary'>Manage Blogs</h1>
      <Row>
      {
            displayBlogs.map (blog=> <ManageBlog
            key={blog.id}
            blog={blog}
            ></ManageBlog>)
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
    
                   
                </div>

            </div>
        </div>
    );
};

export default ManageBlogs;