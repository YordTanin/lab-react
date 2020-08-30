import React, { useState, useEffect, useRef} from 'react'; 

export default function CharacterCard(props) { 
    const [active, setActive] = useState(false); 

    const attempRef = useRef(props.attempt)

    const activate = () => { 
        if(!active){
            setActive(true)
            props.activationHandler(props.value)
        }
    } 

    useEffect(() => {
        if(attempRef.current != props.attempt){
            setActive(false);
            attempRef.current = props.attempt
        }
    })  

    let className = `card ${active ? 'activeCard': ''}`
    if(props.completed == true){
        className =  `card ${active ? 'winCard': ''}`
    }

    return ( 
        <div className={className} onClick={activate}>{props.value}</div>
    )     
}