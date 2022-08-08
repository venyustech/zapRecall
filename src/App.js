import { useReducer, useState } from "react";
import TelaInicial from "./components/TelaInicial/";
import FlashCards from "./components/FlashCards";
import FlashCard from "./components/FlashCard";
import Finish from "./components/Finish";

export default function App() {
  const [actualPage, setActualPage] = useState("TelaInicial");
  const [isWrong, setIsWrong] = useState(false);
  const [cardsCounter, setCardsCounter] = useState(0);
  const Deck = [
    {
      title: "O que é JSX?",
      answer: "Uma extensão de linguagem do JavaScript",
    },
    {
      title: "O React é ",
      answer: "uma biblioteca JavaScript para construção de interfaces",
    },
    {
      title: "Componentes devem iniciar com ?",
      answer: "letra maiúscula",
    },
    {
      title: "Podemos colocar  dentro do JSX",
      answer: "expressões",
    },
    {
      title: "O ReactDOM nos ajuda ",
      answer: "interagindo com a DOM para colocar componentes React na mesma",
    },
    {
      title: "Usamos o npm para ",
      answer: "gerenciar os pacotes necessários e suas dependências",
    },
    {
      title: "Usamos props para ",
      answer: "passar diferentes informações para componentes",
    },
    {
      title: "Usamos estado (state) para __",
      answer:
        "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
  ];

  return (
    <>
      {actualPage == "TelaInicial" ? (
        <TelaInicial setActualPage={setActualPage} />
      ) : (
        ""
      )}
      {actualPage == "FlashCards" ? (
        <FlashCards
          setIsWrong={setIsWrong}
          Deck={Deck}
          cardsCounter={cardsCounter}
          setCardsCounter={setCardsCounter}
          setActualPage={setActualPage}
        />
      ) : (
        ""
      )}
      {actualPage == "Finish" ? (
        <Finish setActualPage={setActualPage} isWrong={isWrong} />
      ) : (
        ""
      )}
    </>
  );
}
