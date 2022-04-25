import React, { useState } from 'react';
import FeedItem from './FeedItem';
import './feed.css';
import Category from '../custom/category/Category';
import { Button } from 'react-bootstrap';
import { FilterList } from '@mui/icons-material';
import FilterButton from './FilterButton';
import FeedItemModal from './FeedItemModal';

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'white',
    boxShadow: 24,
    p: 4,
};

const Feed = () => {
    const [filterState, setFilterState] = useState({ utcscalendar: true });
    const [feedItemModal, setModal] = useState(null);
    const jsonFile = require('./data.json');

    const launchModal = ( itemDetails ) => {
        console.log('launching modal');
        setModal(<FeedItemModal item={itemDetails} handleClose={() => setModal(null)} />);
    }

    return (
        <div style={{ paddingTop: 15 }}>
            <div className="header">
                <h1 style={{ flexGrow: 1 }}>This month's events</h1>
                <FilterButton filterState={filterState} updateFilterState={setFilterState} />
            </div>
            <Category title="UTCS Calendar" visible={filterState.utcscalendar}>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {jsonFile.map(item => (
                        <FeedItem itemDetails={item} setModal={() => launchModal(item)} />
                    ))}
                </div>
            </Category>
            {feedItemModal}
        </div>
    );
}

export default Feed;