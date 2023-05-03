import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div>
            <div className='d-flex justify-content-between'>
                <h2 className='text-info'>Term Campus</h2>
                <img src="../../../public/dp.png" className='' alt="" />
            </div>
            <hr />
        </div>
    );
};

export default Header;