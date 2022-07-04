import React, {useState} from "react";
import classes from './OnOff.module.css'

type OnOffPropsType = {
    switcher: boolean
    changeSwitcher: (e: boolean) => void
}


export function OnOff(props: OnOffPropsType) {
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: "inline-block",
        padding: '2px,',
        backgroundColor: props.switcher ? 'green' : 'transparent'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: "inline-block",
        padding: '2px,',
        marginLeft: '2px',
        backgroundColor: props.switcher ? 'transparent' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: "inline-block",
        marginLeft: '5px',
        padding: '2px,',
        backgroundColor: props.switcher ? 'green' : 'red'
    }

    const onBtnHandler = () => {
        props.changeSwitcher(true)
    }
    const offBtnHandler = () => {
        props.changeSwitcher(false)
    }

    return (<div>
            <div style={onStyle} onClick={onBtnHandler}>on
            </div>
            <div style={offStyle} onClick={offBtnHandler}>off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}