import React from "react";
import classes from './Onoff.module.css'

type OnoffPropsType = {
    switch: boolean
    callback: (param: boolean) => void
}

export function Onoff(props: OnoffPropsType) {
    return (
        <div className={classes.switcherBlock}>
            <div onClick={() => props.callback(true)} className={`${props.switch && classes.on}`}>ON
            </div>

            <div onClick={() => props.callback(false)} className={`${!props.switch && classes.off}`}>OFF
            </div>

            <div className={` ${props.switch && classes.on} ${!props.switch && classes.off} ${classes.circle}`}></div>
        </div>
    )
}