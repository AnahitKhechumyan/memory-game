import { useState } from "react";

export  function Card({card, show, onClick}){
    const [value, setValue] = useState(""); 
    const {id, revealed, word }= card;

    const handleCardChecked = ()=>{
        const guessed = word.toLowerCase() === value.toLowerCase();
        onClick(id, guessed);
    };

    const handleInputChange = (e)=> {
        setValue(e.target.value);
    }
    
    return (
        <div className={`ui card  ${ revealed || show ? 
            "card-revealed" : "card-hidden" 
            }`} 
            >
            { revealed || show ? ( 
                 word
                ) : ( 
                <div className="text-muted input-group">
                <input 
                onChange={handleInputChange}
                 type="text"
                 placeholder='Guess the word'
                 />
                <button className="check" onClick={handleCardChecked}>Check</button>
                </div>
                )
            }
            
        </div>
       
    );
};