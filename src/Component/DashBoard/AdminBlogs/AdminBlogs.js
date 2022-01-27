import React, { useState } from 'react';
import { Alert, Col, Nav } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';
import axios from 'axios';

const AdminBlogs = () => {
    const { register, handleSubmit, reset } = useForm();
    const {user} = useAuth();
    const [success, setSuccess] = useState(false);

        const onSubmit = data => {
            console.log(data);
              axios.post('https://salty-shelf-64141.herokuapp.com/blogs', data)
              .then(res => {
                  if(data?.cost){
                   console.log(data);
                   setSuccess(true);
                   reset()
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
                    
                <Col>
                <div className="shadow-lg p-3 mb-5 bg-body rounded">  
                <h1>Add Blogs</h1>          

                <form className="Blogs-form" onSubmit={handleSubmit(onSubmit)}>

                <input placeholder="Enter Your Name" defaultValue={user?.displayName}  {...register("PersonName", { required: true } )} />

                <input placeholder="Enter Spot Name"  {...register("name", { required: true })} />

                <input placeholder="Enter Location"  {...register("location", { required: true })} />
                
                <input placeholder="Enter Spot Details" defaultValue="" {...register("details", { required: true })} />
                
                <input type="number" placeholder="Enter Total cost" defaultValue="" {...register("cost", { required: true }) } />

                <input type="number" placeholder="Enter Your Rating(Out Of 5)" defaultValue="" {...register("Rating", { required: true, }) } />

                <input placeholder="Image Url" defaultValue="" {...register("img", { required: true }) } />
                
                <input type="submit" />
                </form>
            </div>
            {success && <Alert severity="success">Blog Added</Alert>}
            
        </Col>
                </div>

            </div>
        </div>
    );
};

export default AdminBlogs;