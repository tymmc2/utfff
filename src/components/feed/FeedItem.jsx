import React from 'react';
import { Card } from 'react-bootstrap';

const FeedItem = ({ itemDetails, setModal }) => {
    return (
        <Card className="custom-card col-sm-5 feedCard" onClick={setModal}>
            <h3 className="feed-title">{itemDetails.event}</h3>
            <h5 className="feed-content">{itemDetails.date}</h5>
            <h5 className="feed-content">{itemDetails.location}</h5>
        </Card>
    )
}

export default FeedItem;