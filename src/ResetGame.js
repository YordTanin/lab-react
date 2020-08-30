import React, { useState, useEffect} from 'react'; 

export default function ResetGame(props) { 
    const [active, setActive] = useState(false);

    const activate = () => { 
        if(!active){
            setActive(true)
            props.resetWord()
        }
    } 

    useEffect(() => {
        setActive(false);
    })

    return ( 
        <div className='card resetCard' onClick={activate}>RESET</div>
    )     
}