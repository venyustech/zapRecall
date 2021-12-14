import './styles.css';
import React, { useState } from 'react';

export default function FlashCard(props) {
    const [frontCard, setFrontCard] = useState(true);
    const [borderColor, setBorderColor] = useState("none");
    const [answered, setAnswered] = useState("false")

    if (frontCard) {
        return (
            <>
                <div className='navBar'>
                    <img class='logo-image' src='https://i.imgur.com/3ooqvtH.png'></img>
                </div>
                <section className="wrapper-flashcards">
                    <div className="card-wrapper">
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
                    <div className={`card-wrapper ${borderColor}`}>
                        <div className='box-wrapper'>
                            <p className='card-title'>{props.question}</p>
                            <p className='contador'>{props.cardsCounter}/{props.flashCardsLenght}</p>
                        </div>
                        <p className='flashcard-back'>{props.answer}</p>
                        <IsAnswered />
                    </div>
                </section >
            </>

        );

    function IsAnswered() {
        if (!answered) {
            return (
                <div className='box-wrapper'>
                    <img class='logo-enter' src='https://i.imgur.com/OuOFKHs.png' onClick={() => setFrontCard(false)}></img>
                </div>
            )
        }
        return (
            <div className='answer-wrapper'>
                <div className='answer-options-wrapper'>
                    <button className='answer-bottom black-bottom' onClick={() => setAnswered(true)}>
                        Aprendi agora
                    </button>
                    <button className='answer-bottom red-bottom' onClick={() => { setBorderColor('red-bottom'); setAnswered(true) }}>
                        Não lembrei
                    </button>
                    <button className='answer-bottom green-bottom' onClick={() => { setBorderColor('green-bottom'); setAnswered(true) }}>
                        Lembrei com esforço
                    </button>
                    <button className='answer-bottom yellow-bottom' onClick={() => { setBorderColor('yellow-bottom'); setAnswered(true) }}>
                        Zap!
                    </button>
                </div>
            </div >

        )
    }
}
