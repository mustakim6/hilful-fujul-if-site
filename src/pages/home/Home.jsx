import React from 'react';
import Hero from './sectionsOfHome/Hero';
import About from './sectionsOfHome/About';
import Impacts from './sectionsOfHome/Impacts';
import RecentActivities from './sectionsOfHome/RecentActivities';
import Testimonials from './sectionsOfHome/Testimonials';
import WhyBecomeMembers from './sectionsOfHome/WhyBecomeMembers';
import ProgressBar from './sectionsOfHome/ProgressBar';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <About></About>
            <Impacts></Impacts>
            <RecentActivities></RecentActivities>
            <ProgressBar></ProgressBar>
            <WhyBecomeMembers></WhyBecomeMembers>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;