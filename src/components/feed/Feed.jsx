import React from 'react';
import FeedItem from './FeedItem';

const Feed = () => {
    var jsonFile = require('./data.json');
    // var parsedJson = JSON.parse(jsonFile);
    return (
        <div>
            {jsonFile.map(item => (
                <FeedItem title={item.event} dt={item.date} loc={item.location} description={item.description} />
            ))}
        </div>
    );
}

export default Feed;