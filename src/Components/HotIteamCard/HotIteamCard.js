import React from 'react';
import './HotIteamCard.css'
const HotIteamCard = ({name,price,image,index}) => {

    return (
        <div className='hotIteamCard'>
            <img src={image} alt={`${index} product`}/>
            <p>{name}</p>
            <span>{price}</span>
        </div>
    );
};

export default HotIteamCard;