import React from 'react';

const Main = () => {
    
    return (
        <div className='card'>
            <div className="blogs-container">
                <div className="blog-cart">
                    <img src="../../../public/cr7.jpg" alt="" className="banner w-100 mb-2" />
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
                    <h3>Title</h3>
                </div>
                <div>
                    <a href="">Mark As Read</a>
                </div>
            </div>
        </div>
    );
};

export default Main;