import './styles.css';
import React, { useState } from 'react';

export default function FlashCard(props) {
    let [frontCard, setFrontCard] = useState(true);

    if (frontCard) {
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
                        <p className='flashcard-title'>{props.question}</p>
                        <div className='box-wrapper'>
                            <img class='logo-enter' src='https://i.imgur.com/OuOFKHs.png' onClick={() => setFrontCard(false)}></img>
                        </div>
                    </div>
                </section >
            </>

        )
    }
    else
        return (
            <>
                <div className='navBar'>
                    <img class='logo-image' src='https://i.imgur.com/3ooqvtH.png'></img>
                </div>
                <section className='wrapper-flashcards'>
                    <div className='card-wrapper'>
                        <div className='box-wrapper'>
                            <p className='card-title'>{props.question}</p>
                            <p className='contador'>{props.cardsCounter}/{props.flashCardsLenght}</p>
                        </div>
                        <p className='flashcard-back'>{props.answer}</p>
                        <div className='answer-wrapper'>
                            <div className='answer-options-wrapper'>
                                <button className='answer-bottom black-bottom'>
                                    Aprendi agora
                                </button>
                                <button className='answer-bottom red-bottom'>
                                    Não lembrei
                                </button>
                                <button className='answer-bottom green-bottom'>
                                    Lembrei com esforço
                                </button>
                                <button className='answer-bottom yellow-bottom'>
                                    Zap!
                                </button>

                            </div>
                        </div>
                    </div>
                </section >
            </>

        );
}