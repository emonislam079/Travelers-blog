import React, { useEffect, useState } from 'react';
import { Button, Col, Nav, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { HashLink } from 'react-router-hash-link';

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

    const handelDelete = id =>{
        const url = `https://salty-shelf-64141.herokuapp.com/blogs/${id}`;
        fetch(url, {
          method: 'DELETE'
        })
        .then (res => res.json())
        .then (data =>{
            if(data.deletedCount){
                alert('Want to Delete Blog')
                const remaining = displayBlogs.filter(blog => blog._id !==id);
                setDisplayBlogs(remaining);
            }
          
        })
      } 

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
            displayBlogs.map (blog=> <div
            key={blog.id}
            blog={blog}
            ><Col xs={12} md={12} className="Blogs-box p-3">
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
                <Button>Update</Button> <Button onClick={()=> handelDelete(blog._id)}>Delete</Button>
                </div>
                
              </Col>
              <Col
                xs={12}
                md={4}>
                <img src={blog.img} alt="" />
              </Col>
              
            </Row>
          </Col>

            </div>)
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