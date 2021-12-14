import './styles.css';
import React, { useState } from 'react';

export default function FlashCard(props) {

    return (
        <>
            <div className='navBar'>
                <img class='logo-image' src='https://i.imgur.com/3ooqvtH.png'></img>
            </div>
            <section className='wrapper-flashcards'>
                <div className='card-wrapper'>
                    <div className='box-wrapper'>
                        <p className='contador'>{props.cardsCounter}/{props.flashCardsLenght}</p>
                    </div>
                    <p className='flashcard-title'>{props.title}</p>
                    <div className='box-wrapper'>
                        <img class='logo-enter' src='https://i.imgur.com/OuOFKHs.png'></img>
                    </div>
                </div>
            </section >
        </>

    );
}