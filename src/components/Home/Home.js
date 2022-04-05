import React from 'react';
import img from './image/cello.png';
import './Home.css';
import Review from '../Review/Review';

const Home = () => {
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
            <div>
                <h3 className="mt-5">Customer Reviews</h3>
                <button>See All Reviews</button>
            </div>
        </div>
    );
};

export default Home;