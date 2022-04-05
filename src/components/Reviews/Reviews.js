import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import { Row } from 'react-bootstrap';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
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