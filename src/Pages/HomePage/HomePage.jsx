import React from 'react';
import Header from './Header';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import Category from '../../Components/Category';
import BistroBoss from '../../Components/BistroBoss';
import PopularMenu from '../../Components/PopularMenu';
import CallUs from '../../Components/CallUs';
import Recommends from '../../Components/Recommends';
import ReadMore from '../../Components/ReadMore';
import Testimonials from '../../Components/Testimonials';
const HomePage = () => {
    return (
        <div>
            <Header></Header>
            {/* category section title start */}
            <SectionTitle subHeading={"From 11:00am to 10:00pm"} heading={"Order Online"}></SectionTitle>
            {/* category section title end */}
            {/* category section start */}
            <Category></Category>
            {/* category section end */}
            {/* bistro boss section start */}
            <BistroBoss></BistroBoss>
            {/* bistro boss section end */}
            {/* category section title start */}
            <SectionTitle subHeading={"Cheek it out"} heading={"From our menu"}></SectionTitle>
            {/* category section title end */}
            {/* PopularMenu section start */}
            <PopularMenu></PopularMenu>
            {/* PopularMenu section end */}
            {/* call us section start */}
            <CallUs></CallUs>
            {/* call us section end */}
            {/* recommends section start */}
            <Recommends></Recommends>
            {/* recommends section end */}
            {/* Read More section start */}
            <ReadMore></ReadMore>
            {/* Read More section end */}
            {/* testimonials section start */}
            <Testimonials></Testimonials>
            {/* testimonials section end */}
        </div>
    );
};

export default HomePage;