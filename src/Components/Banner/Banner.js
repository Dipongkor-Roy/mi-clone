import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';

const Banner = ({banner}) => {
    return (
       <Carousel fade>
        {
            banner.end.map((iteam,index)=>(
                <Carousel.Item key={iteam.image} id='banner' interval={1000} keyboard={true}>
                    <img className="d-block w-100" src={iteam.image} alt={`${index} banner`} />
                    <Carousel.Caption>
                        <h3>{iteam.name}</h3>
                        <p>{iteam.description}</p>
                        <p>{iteam.source}</p>
                        <u>Read More</u>
                    </Carousel.Caption>
                </Carousel.Item>
            ))
        }
       </Carousel>
    );
};

export default Banner;