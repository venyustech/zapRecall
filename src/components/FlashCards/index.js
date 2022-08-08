import "./styles.css";
import React, { useState } from "react";
import FlashCard from "../FlashCard";

export default function FlashCards({
  setActualPage,
  setIsWrong,
  Deck,
  cardsCounter,
  setCardsCounter,
}) {
  const cards = Deck.map((card) => (
    <FlashCard
      cardsCounter={cardsCounter}
      Deck={Deck}
      question={card.title}
      answer={card.answer}
      setCardsCounter={setCardsCounter}
      setIsWrong={setIsWrong}
      setActualPage={setActualPage}
    />
  ));
  return (
    <>
      <div className="flashcards">{cards[cardsCounter]}</div>
    </>
  );
}
