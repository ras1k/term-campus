import React, { useEffect, useState } from 'react';
import './Body.css';
import Main from '../Main/Main';
import Sidecart from '../Sidecart/Sidecart';

const Body = () => {
    const [blogs, setBlogs] = useState([]);
    const [cart, setCart] = useState([]);
    const [time, setTime] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    const markBtn = (totalTime) =>{
        for (const blog of blogs){
            setTime([...time, totalTime])
        }
    }
console.log(time)
    const totalReadTime = time.reduce((total, t) => total + t.read, 0)
    // console.log(totalReadTime);
    
    const bookmarkBtn = (blog) => {
        const newCart = [...cart, blog];
        setCart(newCart);
        // console.log(cart);
    }

    return (
        <div>
            <div className='row'>
                <div className='col-md-8'>
                    {
                        blogs.map(blog =>
                            <Main
                                key={blog.id}
                                blog={blog}
                                bookmarkBtn={bookmarkBtn}
                                markBtn={markBtn}
                            ></Main>)
                    }

                </div>
                <div className='col-md-4'>
                    <Sidecart 
                    cart={cart}
                    totalReadTime={totalReadTime}
                    ></Sidecart>
                </div>
            </div>
        </div>
    );
};

export default Body;