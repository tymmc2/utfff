import React from 'react';
import { Modal } from 'react-bootstrap';

const FeedItemModal = ({ item, handleClose }) => {
    return (
        <Modal show={true} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title className="feed-title">{item.event}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p className="feed-content"><b>Date: </b>{item.date}</p>
                <p className="feed-content"><b>Location: </b>{item.location}</p>
                <p className="feed-content"><b>Event description: </b>{item.description}</p>
            </Modal.Body>
        </Modal>
    );
};

export default FeedItemModal;