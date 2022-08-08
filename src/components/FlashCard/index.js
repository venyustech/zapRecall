import "./styles.css";
import React, { useState } from "react";

export default function FlashCard({
  setActualPage,
  cardsCounter,
  Deck,
  question,
  answer,
  setCardsCounter,
  setIsWrong,
}) {
  const [frontCard, setFrontCard] = useState(true);
  const [borderColor, setBorderColor] = useState("none");
  const [answered, setAnswered] = useState(false);

  const [answersAmount, setAnswersAmaount] = useState(1);
  function changePage() {
    setAnswersAmaount(answersAmount + 1);
    setBorderColor("none");
    setCardsCounter(cardsCounter + 1);
    setAnswered(false);
    setFrontCard(true);
    if (answersAmount === 8) {
      setActualPage("Finish");
    }
  }

  if (frontCard)
    return (
      <>
        <div className="navBar">
          <img class="logo-image" src="https://i.imgur.com/3ooqvtH.png"></img>
        </div>
        <section className="wrapper-flashcards">
          <div className="card-wrapper">
            <div className="box-wrapper">
              <p className="contador">
                {cardsCounter + 1}/{Deck.length}
              </p>
            </div>
            <p className="flashcard-title">{question}</p>
            <div className="box-wrapper">
              <img
                class="logo-enter"
                src="https://i.imgur.com/OuOFKHs.png"
                onClick={() => setFrontCard(false)}
              ></img>
            </div>
          </div>
        </section>
      </>
    );
  else
    return (
      <>
        <div className="navBar">
          <img class="logo-image" src="https://i.imgur.com/3ooqvtH.png"></img>
        </div>
        <section className="wrapper-flashcards">
          <div className={`card-wrapper ${borderColor}`}>
            <div className="box-wrapper">
              <p className="card-title">{question}</p>
              <p className="contador">
                {cardsCounter + 1}/{Deck.length}
              </p>
            </div>
            <p className="flashcard-back">{answer}</p>
            <IsAnswered />
          </div>
        </section>
      </>
    );

  function IsAnswered() {
    if (answered == true)
      return (
        <div className="box-wrapper">
          <img
            class="logo-enter"
            src="https://i.imgur.com/OuOFKHs.png"
            onClick={() => changePage()}
          ></img>
        </div>
      );
    return (
      <div className="answer-wrapper">
        <div className="answer-options-wrapper">
          <button
            className="answer-bottom black-bottom"
            onClick={() => setAnswered(true)}
          >
            Aprendi agora
          </button>
          <button
            className="answer-bottom red-bottom"
            onClick={() => {
              setBorderColor("red-bottom");
              setAnswered(true);
              setIsWrong(true);
            }}
          >
            Não lembrei
          </button>
          <button
            className="answer-bottom green-bottom"
            onClick={() => {
              setBorderColor("green-bottom");
              setAnswered(true);
            }}
          >
            Lembrei com esforço
          </button>
          <button
            className="answer-bottom yellow-bottom"
            onClick={() => {
              setBorderColor("yellow-bottom");
              setAnswered(true);
            }}
          >
            Zap!
          </button>
        </div>
      </div>
    );
  }
}
