import React from 'react';
import ProductReviewCard from '../ProductReviewCard/ProductReviewCard'
import './ProductReviews.css'

const ProductReviews = ({productReviews}) => {
    return (
        <div className='ProductReviews'>
            {
                productReviews.map((iteam,index)=>(
                    <ProductReviewCard 
                    key={iteam.image}
                    price={iteam.price}
                    name={iteam.name}
                    image={iteam.image}
                    review={iteam.review}
                    index={index}
                    ></ProductReviewCard>
                ))
            }
        </div>
    );
};

export default ProductReviews;