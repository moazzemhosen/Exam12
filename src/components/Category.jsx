
// import logo from './logo.svg';
import React, { useState } from "react"

import './category.css';

export const Category = () => {
    

    const [currentscore, setCurrentscore] = useState(76);
    const [currentwicket, setCurrenticket] = useState(2);
    const [currentover, setCurrentover] = useState(50)

    const addrun = () => {
        setCurrentscore(currentscore + 1)
    }

    const addrun4=()=>{
        setCurrentscore(currentscore + 4)
    }

    const addrun6=()=>{
        setCurrentscore(currentscore + 6)
      }

    const addwicket = () => {
        setCurrenticket(currentwicket + 1)
        if(currentwicket>=10){
           return(alert("No man are available"))  
            }
        
    }

    const addover = () => {
        setCurrentover(currentover +0.1)
    }
    return (
        <div className="App">
            <div className="scorebord">

                <div>
                    <h1 className="scoreCount">Score</h1>
                    <h4>{currentscore}</h4>
                </div>

                <div>
                    <h1 className="scoreCount">Wicket</h1>
                    <h4>{currentwicket}</h4>
                </div>

                <div>
                    <h1 className="scoreCount">Over</h1>
                    <h4>{currentover}</h4>
                </div>

            </div>


            <div className="buttonbord">
                <div className="flexdiv" >
                    <div>
                        <p>Add run:</p>
                    </div>
                    <button onClick={addrun}>Add 1</button>
                    <button onClick={addrun4}>Add 4</button>
                    <button onClick={addrun6}>Add 6</button>
                    {/* <button onClick={addrunfour}>Add 4</button> */}
                </div>

                <div className="flexdiv">
                    <div>
                        <p>Wicket:</p>
                    </div>
                    <button onClick={addwicket}>Add </button>

                </div>
                <div className="flexdiv">
                    <div>
                        <p>Over:</p>
                    </div>
                    <button onClick={addover}>Add </button>

                </div>

            </div>


        </div>
    );
}


