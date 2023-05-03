import React, { useEffect, useState } from 'react';
import './Body.css';
import Main from '../Main/Main';
import Sidecart from '../Sidecart/Sidecart';

const Body = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, []);
    return (
        <div>
            <div className='row'>
                <div className='col-md-8'>
                    {
                        cards.map(card =>
                            <Main
                                key={card.id}
                                card={card}
                            ></Main>)
                    }

                </div>
                <div className='col-md-4 card'>
                    <Sidecart></Sidecart>
                </div>
            </div>
        </div>
    );
};

export default Body;