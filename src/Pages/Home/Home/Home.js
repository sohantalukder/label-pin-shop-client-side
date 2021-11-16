import React from 'react';
import Reviews from '../../Reviews/Reviews';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Navigation from '../../Shared/Navigation/Navigation';
import Services from '../Services/Services';
import Accordion from '../Accordion/Accordion'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Reviews></Reviews>
            <Accordion></Accordion>
            <Footer></Footer>
        </div>
    );
};

export default Home;