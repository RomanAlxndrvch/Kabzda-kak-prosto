import React, {useState} from "react";
import classes from './Onoff.module.css'


export function Onoff() {
    let [on, setOn] = useState<boolean>(false)
    console.log('OnOff rendering!')

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: "inline-block",
        padding: '2px,',
        backgroundColor: on ? 'green' : 'transparent'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: "inline-block",
        padding: '2px,',
        marginLeft: '2px',
        backgroundColor: on ? 'transparent' : 'red'
    }

    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: "inline-block",
        marginLeft: '5px',
        padding: '2px,',
        backgroundColor: on ? 'green' : 'red'
    }

    const onBtnHandler = () => {
        setOn(true)
    }
    const offBtnHandler = () => {
        setOn(false)
    }

    return (<div>
            <div style={onStyle} onClick={onBtnHandler}>on</div>
            <div style={offStyle} onClick={offBtnHandler}>off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}