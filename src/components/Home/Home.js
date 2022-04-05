import React from 'react';
import img from './image/cello.png';
import './Home.css';
import Review from '../Review/Review';
import useReviews from '../../Hook/useReviews';
import Reviews from '../Reviews/Reviews';
import { Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [reviews, setReviews] = useReviews({});

    let navigate = useNavigate();
    const reviewNavigate = () => {
        navigate(`/reviews`);
    }

    return (
        <div>
            <div className="row w-100 d-flex align-items-center justify-content-evenly">
                <div className="col-6 modify">
                    <h2 className="">Your Next Instrument</h2>
                    <h2 className="mb-5">Your Best Instrument</h2>
                    <p>This is an instrument shop. </p>
                    <p> Here you will find your best instruments </p>
                    <p>   that is compatible with you here. </p>
                    <h1 className="mt-3">Explore</h1>
                </div>
                <div className="col-6">
                    <img src={img} alt="" />
                </div>
            </div >
            <div className='pb-5'>
                <h3 className="mt-5">Customer Reviews</h3>
                {/* <Reviews></Reviews> */}
                <Row xs={1} md={3} className="g-4 w-75 mx-auto">
                    {
                        reviews.slice(3).map(review =>
                            <Review
                                key={review.id}
                                review={review}
                            ></Review>)
                    }
                </Row>
                <button onClick={reviewNavigate} type="button" class="mt-3 btn btn-outline-secondary">See All Reviews</button>
            </div>
        </div>
    );
};

export default Home;