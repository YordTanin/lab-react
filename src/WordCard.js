import React, {useState, useRef} from 'react';
import _ from 'lodash';

import CharacterCard from './CharacterCard';
import ResetGame from './ResetGame';

const prepareStateFormWord = given_word => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        success: 0,
        guess: '',
        completed: false
    }
}

export default function WordCard(props){

    const [state, setState] = useState(prepareStateFormWord(props.value))

    const attempRef = useRef(props.attempt)
    
    const activationHandler = c =>{
        console.log(`${c} has been activated.`)
        
        let guess = state.guess + c
        setState({...state, guess})

        if(guess.length == state.word.length){
            if(guess == state.word){
                console.log('yeah!')
                setState({...state, completed: true, success: state.success+1})
                props.activationSetScore(true)
            }else{
                console.log('reset, net attempt')
                setState({...state, guess: '', attempt: state.attempt + 1})
                props.activationSetScore(false)
                resetWord();
            }
        }
    }

    const resetWord = () =>{
        console.log('Game was reset.')
        const new_word = prepareStateFormWord(props.value)
        setState({
            ...state, 
            word: new_word.word,
            guess: new_word.guess, 
            chars: new_word.chars,
            completed: new_word.completed,
        })
        props.playAgain();
    }
    return (
        <div className=''>
            {
                state.chars.map((c, i) =>
                    <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={props.attempt} completed={state.completed}/>
                )
            }
            <ResetGame resetWord={resetWord}/>
        </div>
    )
}