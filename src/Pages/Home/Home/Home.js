import React from 'react';
import AllReviews from '../../AllReviews/AllReviews';
import Banner from '../../Banner/Banner';
import Benefits from '../../Benefits/Benefits';
import Review from '../../Review/Review';


import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import TopProducts from '../../TopProducts/TopProducts';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <TopProducts></TopProducts>
            <Benefits></Benefits>
            <AllReviews></AllReviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;