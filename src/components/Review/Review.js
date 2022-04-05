import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Review = (props) => {
    const { name, review, rating, P_name } = props.review;
    return (
        <Col>
            <Card>
                <Card.Body>
                    <Card.Title className="text-center">{name}</Card.Title>
                    <Card.Text>
                        Item: {P_name}
                    </Card.Text>
                    <Card.Text>
                        Review: {review}
                    </Card.Text>
                    <Card.Text>
                        Rating: {rating}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Review;