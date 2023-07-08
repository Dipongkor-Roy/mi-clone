import React from 'react';
import Offer from '../../Components/Offer/Offer'
import './Offers.css'
const Offers = ({offer}) => {
    return (
        <div className='offersSection'>
            {
                offer.map((iteam,index)=>(
                    <Offer 
                    key={iteam.image} 
                    index={index}
                    src={iteam.image}
                    link={iteam.url}
                    ></Offer>
                ))
            }
            
        </div>
    );
};

export default Offers;