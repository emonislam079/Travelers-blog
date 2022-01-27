import React, { useEffect, useState } from 'react';
import {Container, Nav, Row } from 'react-bootstrap';

import { HashLink } from 'react-router-hash-link';
import Approved from './Approved';

const ApprovedBlog = () => {
    const [blog, setblog] = useState([]);
   
    useEffect(() => {
        const url = "https://salty-shelf-64141.herokuapp.com/usersblogs";
        fetch(url)
            .then(res => res.json())
            .then(data => setblog(data));
    }, []);

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
                    
                <Container>
                    <Row>
                    {
                        blog.map (blog=> <Approved
                            key={blog.id}
                            blog={blog}
                            ></Approved>)
                    }
          
                    </Row>
                </Container>
                </div>

            </div>
        </div>

        
    );
};

export default ApprovedBlog;