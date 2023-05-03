import React from 'react';
import './Main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const Main = (props) => {
    const { name, title, date, read, cover_img, person_img, id } = props.blog;
    const markBtn = props.markBtn;
    const bookmarkBtn = props.bookmarkBtn;
   
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
                            <p>
                                <small>{date}</small>
                            </p>
                        </div>
                    </div>
                    <div>
                        <p>
                            {read} &nbsp;
                            <button onClick={()=>bookmarkBtn(props.blog)} className='btn btn-outline-info'>
                                <FontAwesomeIcon icon={faBookmark} />
                            </button>
                        </p>
                    </div>
                </div>
                <div className='Title'>
                    <h4>{title}</h4>
                </div>
                <div>
                    <button onClick={()=>markBtn(props.blog)} className='btn btn-info text-white'> Mark As Read </button>
                </div>
            </div>
        </div>
    );
};

export default Main;