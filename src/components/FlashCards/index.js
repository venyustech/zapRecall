import './styles.css';
import React, { useState } from 'react';
import FlashCard from '../FlashCard';

export default function FlashCards() {
    const [cardsCounter, setContador] = useState(1);

    function ContadorAdd() {
        setContador(cardsCounter + 1)
        alert("entrei")
    }
    return (
        <>
            <div className="flashcards">
                <FlashCard
                    cardsCounter={cardsCounter}
                    flashCardsLenght="8"
                    title="testezinho basico"
                />
            </div>
        </>

    );
}