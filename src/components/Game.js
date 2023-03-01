import "./Game.css";

const Game = ({ verifyLetter }) => {
    return (
        <div className="game">
            <p className="points">
                <span>Pontuação</span>
            </p>
            <h1>Advinhe a palavra</h1>
            <h3 className="tip">Dica sobra a palavra</h3>
            <div className="wordContainer">
                <span className="letter">A</span>
                <span className="blankSquare"></span>
            </div>
            <div className="letterContainer">
                <p>Tenta acerta a letra</p>
                <form>
                    <input type="text" name="letter" maxLength={1} required />
                    <button>Jogar</button>
                </form>
            </div>
            <div className="wrongLettersContainer">
                <p>Letras já utilizadas:</p>
            </div>
        </div>
    );
};

export default Game;
