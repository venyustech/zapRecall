import "./styles.css";
export default function Finish({ isWrong, setActualPage }) {
  console.log("wrong:", isWrong);
  let answer = null;
  if (isWrong) {
    answer = {
      title: "Putz..",
      subtitle:
        "Você esqueceu alguns flashcards... Não desanime! Na próxima você consegue!",
      img: "https://i.imgur.com/8lIHmXk.png",
    };
  }
  if (!isWrong) {
    answer = {
      title: "PARABÉNS!",
      subtitle: "Você não esqueceu de nenhum flashcard!",
      img: "https://i.imgur.com/jTtnfll.png",
    };
  }
  return (
    <div className="inicio">
      <div className="navBar">
        <img src="https://i.imgur.com/3ooqvtH.png"></img>
      </div>
      <div className="container">
        <div className="result">
          <h1>
            {answer.title}
            <img className="logo-result" src={answer.img}></img>
          </h1>
          <h2>{answer.subtitle}</h2>
        </div>
      </div>
    </div>
  );
}
