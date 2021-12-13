import { useState } from "react";
import TelaInicial from "./components/TelaInicial/";
import FlashCards from "./components/FlashCards";
export default function App() {
    const [actualPage, setActualPage] = useState("TelaInicial")

    return (
        <>
            <div className="inicio hide">
                <TelaInicial />
            </div>
            <div className="flashcards">
                <FlashCards />
            </div>
        </>
    );
}