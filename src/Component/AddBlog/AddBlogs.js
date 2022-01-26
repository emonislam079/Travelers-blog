import React, {useState } from 'react';
import { Alert, Col, Container} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';
import './AddBlog.css'

const AddBlogs = () => {
    const { register, handleSubmit, reset } = useForm();
    const {user} = useAuth();
    const [success, setSuccess] = useState(false);

        const onSubmit = data => {
            console.log(data);
              axios.post('http://localhost:5000/blogs', data)
              .then(res => {
                  if(data?.cost){
                   console.log(data);
                   setSuccess(true);
                   reset()
                  }
        })
    }

    return (
        <Container>
        <Col item xs={12} md={12}>
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
        </Container>
    );
};

export default AddBlogs;