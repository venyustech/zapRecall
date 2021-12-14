import { useState } from "react";
import TelaInicial from "./components/TelaInicial/";
import FlashCards from "./components/FlashCards";
import FlashCard from "./components/FlashCard";
import Finish from "./components/Finish";

export default function App() {
    const [actualPage, setActualPage] = useState("TelaInicial")

    return (
        <>
            {actualPage == 'TelaInicial' ? <TelaInicial setActualPage={setActualPage} /> : ''}
            {actualPage == 'FlashCards' ? <FlashCards /> : ''}
            {actualPage == 'Finish' ? <Finish setActualPage={setActualPage} /> : ''}

        </>
    );
}