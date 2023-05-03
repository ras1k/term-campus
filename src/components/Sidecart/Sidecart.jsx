import React from 'react';
import './Sidecart.css';

const Sidecart = ({cart, totalReadTime}) => {
    const {title} = cart;

    console.log(cart)

    return (
        <div className='full-cart'>
            <div className='spent-card'>
                <h4>Spent Time on Read : {totalReadTime} Minutes</h4>
            </div>

            <div>
                <div className='mt-3'>
                    <div className='bookmarks card'>
                        <h4>Bookmarked Blogs : {cart.length}</h4>
                        {
                            cart.map(c => <h5 className='mt-2 bookCart'>{c.title} </h5>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidecart;