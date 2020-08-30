import React, {useState} from 'react';
import _, { set } from 'lodash';

import WordCard from './WordCard';

const prepareScoreState = () => {
    return {
        attempt: 0,
        success: 0,
        fail: 0
    }
}

export default function ScoreBoard(props){
    const [state, setScore] = useState(prepareScoreState())

    const activationSetScore = is_success =>{
        if(is_success){
            setScore ({...state, 
                        success: state.success + 1})
        }
        else{
            setScore ({...state, 
                attempt: state.attempt + 1})
        }
    }
    const playAgain = () =>{
        setScore ({...state, 
            attempt: state.attempt + 1})
    }
    return (
        <div className='grid-container'>
            <WordCard activationSetScore={activationSetScore} playAgain={playAgain} value={props.value} attempt={state.attempt}/>
            <table className='tableScore'>
                <tr>
                    <th>You wins</th>
                    <th>Play Count</th>
                </tr>
                <tr >
                    <td>{state.success}</td>
                    <td>{state.attempt}</td>
                </tr>
            </table>
        </div>
    )
}