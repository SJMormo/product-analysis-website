import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import { Row } from 'react-bootstrap';
import useReviews from '../../Hook/useReviews';

const Reviews = () => {

    const [reviews, setReviews] = useReviews({});

    return (
        <div>
            <Row xs={1} md={2} className="g-4 w-100">
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