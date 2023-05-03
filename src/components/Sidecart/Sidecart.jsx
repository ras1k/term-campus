import React from 'react';
import './Sidecart.css';
import Bookmarks from '../Bookmarks/Bookmarks';

const Sidecart = () => {
    return (
        <div>
            <div className='spent-card'>
                <h4>Spent Time on Read : 177 Minutes</h4>
            </div>

            <div>
                <Bookmarks></Bookmarks>
            </div>
        </div>
    );
};

export default Sidecart;