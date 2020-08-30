import React, { useState, useEffect} from 'react'; 

export default function ResetGameButton(props) { 
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
        <div className='card resetCard' onClick={activate}>Again</div>
    )     
}