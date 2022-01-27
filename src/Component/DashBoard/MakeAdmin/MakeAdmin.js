import React, { useState } from 'react';
import { Alert, Button, Nav } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { HashLink } from 'react-router-hash-link';
import './Makeadmin.css'

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { reset } = useForm();
    
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        const user = {email};
        fetch('https://salty-shelf-64141.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount){
                setSuccess(true);
                reset();
            }
            
        })
        e.preventDefault()
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
                <div className="admin-form">
            <h1>Add to Admin Panel</h1>
            <form onSubmit={handleAdminSubmit}>

            <input 
            label="Email"
            type='email'
            onBlur={handleOnBlur}/>
            {/* <br />
            <br /> */}
            <Button
            type='submit'>Make Admin</Button>
            </form>
            <br />
            {success && <Alert severity="success">Make admin Successfully</Alert>}
        </div>
                   
                </div>

            </div>
        </div>
    );
};

export default MakeAdmin;