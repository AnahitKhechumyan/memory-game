import { useState } from "react";
import { faker } from '@faker-js/faker';
import { Button } from "../button/button";
import { Card } from "./card";
import { Modal } from "../modal/modal";
 
export const GameBoard = ({level, onResetGame})=>{
    const [cards, setCards] = useState(generateWordsCards(level)); 
    const [cardsRevealed, setCardsRevealed] = useState(true);

    const handleCardClick = (id, guessed) =>{ 

        setCards((prevState) => 
            prevState.map((card) => 
             card.id === id ? { ...card, revealed: true, guessed } : card)     
        );
    };

    const handleHideCards = ()=> {
        setCardsRevealed(false );  
    };

    const allcardsOpened = cards.every((card)=> card.revealed);
    const guessedCorrect = cards.filter((card)=> card.guessed);
    
    const handleResetGame = () => {
        onResetGame();
    };

    return (
        <div className="game">
            {
               cardsRevealed ? (
                <Button
                className="secondary"
                onClick={handleHideCards}
                > 
                Hide
                </Button>
               ) : (
                  <div className="text-muted">
                    Start guessing by clicking the cards!
                  </div>
               )
            }
            
            <div className="cards">             
                {
                     cards.map((card) => {
                        return (
                           <Card 
                           show={cardsRevealed}
                           key={card.id} 
                           card={card} 
                           onClick={handleCardClick}
                           />
                        );
                    })
                } 
            </div>
            {
                 guessedCorrect.length === cards.length &&
                    allcardsOpened && (
                        <Modal
                            open={ allcardsOpened}
                            title={"Game Over!"}
                            children={
                                <div className="game-end">
                                            <p>
                                                Congratulations, you won! <img src="https://static.xx.fbcdn.net/images/emoji.php/v9/tc4/1/30/1f389.png" widht="100px" haight="100px"></img>
                                            </p>
                                            <Button
                                            className="success"
                                            onClick={handleResetGame}
                                            >
                                            Start Again
                                            </Button>
                                </div> 
                            }
                        /> 
                        )   
            }
            {
                guessedCorrect.length !== cards.length && 
                allcardsOpened && (
                    <Modal
                    open={ allcardsOpened}
                    title={"Game Over!"}
                    children={
                        <div className="game-end">
                        <p>{guessedCorrect.length} correct answer</p>
                        <p>Try again!</p>
                        <Button
                            className="success"
                            onClick={handleResetGame}
                            >
                            Start Again
                            </Button>
                    </div>
                    }
                    />
                )
            }
            
        </div>
    );
};

const generateWordsCards = (level) => {
    const words = Array.from({length: level}, () => faker.word.noun());
    return words.map((word, index) => ({
         id: faker.string.uuid(),
         word,
         revealed: false,
         guessed: false,
         }));
};