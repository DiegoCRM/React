import "./StartScreen.css";

const StartScreen = ({startGame}) => {
  return (
    <div className="start">
        <h1>Secret Word</h1>
        <p>Clique no botão para iniciar</p>
        <button onClick={startGame}>Comece o jogo</button>
    </div>
  )
}

export default StartScreen