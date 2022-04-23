import React from 'react';
import { Container } from 'react-bootstrap';
import Feed from '../components/feed/Feed';

const FeedPage = () => {
    return (
        <div>
            <Container>
                <Feed />
            </Container>
        </div>
    );
};

export default FeedPage;