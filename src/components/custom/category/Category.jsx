import React from 'react';
import './Category.css';

const Category = ({ title, children, visible = true }) => {
    return (
        <div style={{ display: visible ? 'initial' : 'none' }}>
        <div className="sepRow">
            <div className="bar" />
            <p className="col-auto titleText">{title}</p>
            <div className="bar" />
        </div>
        {children}
        </div>
    );
};

export default Category;