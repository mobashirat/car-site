import React from 'react';
import Banner from '../../Banner/Banner';
import Benefits from '../../Benefits/Benefits';


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
            <Footer></Footer>
        </div>
    );
};

export default Home;