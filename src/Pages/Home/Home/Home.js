import React from 'react';
import Appointment from '../Appointment/Appointment';
import Blogs from '../Blogs/Blogs';
import Expertise from '../Expertise/Expertise';
import Gallery from '../Gallery/Gallery';
import Header from '../Header/Header';
import Mission from '../Mission/Mission';
import Pricing from '../Pricing/Pricing';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Expertise></Expertise>
            <Mission></Mission>
            <Services></Services>
            <Appointment></Appointment>
            <Gallery></Gallery>
            <Pricing></Pricing>
            <Testimonial></Testimonial>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;