import React from 'react';
import './Sidecart.css';

const Sidecart = ({cart, totalReadTime}) => {
    const {title} = cart;

    console.log(cart)

    return (
        <div>
            <div className='spent-card'>
                <h4>Spent Time on Read : {totalReadTime}</h4>
            </div>

            <div>
                <div className='mt-3'>
                    <div className='bookmarks card'>
                        <h4>Bookmarked Blogs : {cart.length}</h4>
                        {
                            cart.map(c => <h4>{c.title} </h4>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidecart;