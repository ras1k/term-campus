import React from 'react';

const Main = () => {
    return (
        <div className='card'>
            <div className="blogs-container">
                <div className="blog-cart">
                    <img src="" alt="" className="banner" />
                </div>
                <div className='title-name d-flex justify-content-between'>
                    <div className='d-flex gap-3'>
                        <div>
                            <img src="../../../public/dp.png" alt="" />
                        </div>
                        <div>
                            <h5 className='name'>Name</h5>
                            <p><small>date</small></p>
                        </div>
                    </div>
                    <div>
                        <p>5 mins read</p>
                    </div>
                </div>
                <div className='Title'>
                    Title
                </div>
                <div>
                    <a href="">Mark As Read</a>
                </div>
            </div>
        </div>
    );
};

export default Main;