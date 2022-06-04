import React from "react";
import classes from './Onoff.module.css'

type OnoffPropsType = {
    switch: boolean
}

export function Onoff(props: OnoffPropsType) {

    return (
        <div className={classes.switcherBlock}>

        </div>
    )
}