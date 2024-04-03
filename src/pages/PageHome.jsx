import React from 'react';
import Carousel from '../components/CarouselSlide';
import NavegaTabs from '../components/NavegaTabs';

const PageHome = () => {

    return (
        <>
            <div> 
                <Carousel /> 
            </div>
            <div>
                <NavegaTabs />
            </div>
        </>
    )
};

export default PageHome;