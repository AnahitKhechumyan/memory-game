import { useState } from "react";
import { Button } from "../components/button/button";
import { GameBoard } from "../components/game-board/game-board";
import "./game.css";

export const Game = ()=>{
    const [level, setLevel] = useState(6);
    const [gameStart, setGameStart] = useState(true);

    const handleLevelChange = (e) => {
        setLevel(e.target.value);
        console.log("Button clicked");
    }

    const handleStartGame = ()=> {
        setGameStart(false);
    }

    const handleResetGame = ()=> {
        setGameStart(true);
    }
    return (
    
        <div className="ui container"> 
             <h1>Memory Game</h1>
             {
                gameStart ? (<div className="start"> 
                <div className="ui select">
                    <h3>Select Difficulty Level. </h3>
                    <select onChange={handleLevelChange}>
                        <option value="6">Easy</option>
                        <option value="9">Medium</option>
                        <option value="12">Hard</option>
                    </select>
                </div>
                <Button 
                className="primary" 
                onClick={handleStartGame}
                > 
                Start Game 
                </Button>
             </div>) : (
                <GameBoard level={level} onResetGame={handleResetGame}/>
             )
             }  
          
     </div>      
    );
};