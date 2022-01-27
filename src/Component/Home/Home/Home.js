import React from 'react';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import TopRated from '../TopRated/TopRated';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopRated></TopRated>
           <Blogs></Blogs>

        </div>
    );
};

export default Home;