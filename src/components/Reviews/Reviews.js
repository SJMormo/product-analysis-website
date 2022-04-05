import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import { Row } from 'react-bootstrap';
import useReviews from '../../Hook/useReviews';

const Reviews = () => {

    const [reviews, setReviews] = useReviews({});

    return (
        <div>
            <Row sm={1} md={3} className="mt-4 g-4 w-75 mx-auto">
                {
                    reviews.map(review =>
                        <Review
                            key={review.id}
                            review={review}
                        ></Review>)
                }
            </Row>
        </div>
    );
};

export default Reviews;