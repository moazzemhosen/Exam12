
// import logo from './logo.svg';
import React, { useState } from "react"

import './category.css';

export const Category = () => {
    

    const [score, setScore] = useState(76);
    const [wicket, setWicket] = useState(2);
    const [over, setOver] = useState(50)

    const addrun = () => {
        setScore(score + 1)
    }

    const addrun4=()=>{
      setScore(score+4)
    }

    const addrun6=()=>{
        setScore(score+6)
      }

    const addwicket = () => {
        setWicket(wicket + 1)
        if(wicket>=10){
           return(alert("No man are available"))  
            }
        
    }

    const addover = () => {
        setOver(over +0.1)
    }
    return (
        <div className="App">
            <div className="scorebord">

                <div>
                    <h1 className="scoreCount">Score</h1>
                    <h4>{score}</h4>
                </div>

                <div>
                    <h1 className="scoreCount">Wicket</h1>
                    <h4>{wicket}</h4>
                </div>

                <div>
                    <h1 className="scoreCount">Over</h1>
                    <h4>{over}</h4>
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


