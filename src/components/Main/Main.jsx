import React from 'react';
import './Main.css'

const Main = (props) => {
    const {name, title, date, read, cover_img, person_img} = props.card;
    return (
        <div className='card mb-3'>
            <div className="blogs-container">
                <div className="blog-cart">
                    <img src={cover_img} alt="" className="banner w-100 mb-2" />
                </div>
                <div className='title-name d-flex justify-content-between'>
                    <div className='person d-flex gap-3'>
                        <div>
                            <img src={person_img} alt="" />
                        </div>
                        <div>
                            <h5 className='name'>Name : {name}</h5>
                            <p><small>{date}</small></p>
                        </div>
                    </div>
                    <div>
                        <p>{read}</p>
                    </div>
                </div>
                <div className='Title'>
                    <h3>{title}</h3>
                </div>
                <div>
                    <a href="">Mark As Read</a>
                </div>
            </div>
        </div>
    );
};

export default Main;