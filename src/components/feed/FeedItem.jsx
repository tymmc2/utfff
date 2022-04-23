import React from 'react';
import { Card } from 'react-bootstrap';

const FeedItem = ({ title, dt, location, description }) => {
    return (
        <div>
            <Card className="feedCard">
                <h3>{title}</h3>
                <h5>{dt}</h5>
                <h5>{location}</h5>
                <h5>{description}</h5>
            </Card>
        </div>
    )
}

export default FeedItem;