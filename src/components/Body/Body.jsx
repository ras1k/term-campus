import React from 'react';
import './Body.css';
import Main from '../Main/Main';
import Sidecart from '../Sidecart/Sidecart';

const Body = () => {
    return (
        <div>
            <div className='row'>
                <div className='col-md-8'>
                    <Main></Main>
                </div>
                <div className='col-md-4 card'>
                    <Sidecart></Sidecart>
                </div>
            </div>
        </div>
    );
};

export default Body;