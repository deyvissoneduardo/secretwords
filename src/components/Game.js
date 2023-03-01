import { useState, useRef } from "react";
import "./Game.css";

const Game = ({
    verifyLetter,
    pickedCategory,
    pickedWord,
    letters,
    guessedLetters,
    wrongLetters,
    guesses,
    score,
}) => {
    const [letter, setLetter] = useState("");
    const letterInputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        verifyLetter(letter);
        setLetter("");

        letterInputRef.current.focus();
    };
    return (
        <div className="game">
            <p className="points">
                <span>Pontuação {score}</span>
            </p>
            <h1>Advinhe a palavra</h1>
            <h3 className="tip">
                Dica sobra a palavra <span>{pickedCategory}</span>
            </h3>
            <p>Tentaticas {guesses}</p>
            <div className="wordContainer">
                {letters.map((letter, i) =>
                    guessedLetters.includes(letter) ? (
                        <span className="letter" key={i}>
                            {letter}
                        </span>
                    ) : (
                        <span key={i} className="blankSquare"></span>
                    )
                )}
            </div>
            <div className="letterContainer">
                <p>Tenta acerta a letra</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="letter"
                        maxLength={1}
                        required
                        onChange={(e) => setLetter(e.target.value)}
                        value={letter}
                        ref={letterInputRef}
                    />
                    <button>Jogar</button>
                </form>
            </div>
            <div className="wrongLettersContainer">
                <p>Letras já utilizadas:</p>
                {wrongLetters.map((letter, i) => (
                    <span key={i}>{letter}, </span>
                ))}
            </div>
        </div>
    );
};

export default Game;
