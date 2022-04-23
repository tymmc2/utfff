import React from 'react';
import { Container } from 'react-bootstrap';

const ResourcesList = () => {
    return (
        <Container style={{ textAlign: 'left', padding: 20, height: 300 }}>
            <h3>Extra resources</h3>
            <ul>
                <li><a href="https://deanofstudents.utexas.edu/emergency/utoutpost.php">UT Outpost</a></li>
            </ul>
        </Container>
    );
};

export default ResourcesList;