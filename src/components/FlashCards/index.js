import './styles.css';
import React, { useState } from 'react';
export default function FlashCards() {
    const [contador, setContador] = useState(1);

    function ContadorAdd() {
        setContador(contador + 1)
        alert("entrei")
    }

    return (
        <>
            <div className='navBar'>
                <img class='logo-image' src='https://i.imgur.com/3ooqvtH.png'></img>
            </div>
            <section className='wrapper-flashcards'>
                <div className='card-wrapper'>
                    <div className='box-wrapper'>
                        <p className='contador'>{contador}/8</p>
                    </div>
                    <p className='flashcard-title'>O que é JSX?</p>
                    <div className='box-wrapper'>
                        <img class='logo-enter' src='https://i.imgur.com/OuOFKHs.png'></img>
                    </div>
                </div>
            </section >
        </>

    );
}