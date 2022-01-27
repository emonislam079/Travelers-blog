import React from 'react';
import {Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Dashboard = () => {
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
                    <h1 className='fw-bold mt-5'>Travelers Dash Board</h1>
                   
                </div>

            </div>
        </div>
    );
};

export default Dashboard;