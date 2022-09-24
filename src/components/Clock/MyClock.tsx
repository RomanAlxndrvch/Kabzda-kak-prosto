import React, {useEffect, useState} from "react";
import classes from './MyClock.module.css'

type ClockPropsType = {}

export const MyClock = (props: ClockPropsType) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    const getTwoDigitsString = (number: number): string => {
        return number < 10 ? `0${number}` : `${number}`
    }


    return (
        <div className={classes.clock}>
            <div
                className={classes.hour_hand}
                style={{
                    transform: `rotateZ(${(date.getHours() + (date.getMinutes() / 60)) * 30}deg)`
                }}
            />
            <div
                className={classes.min_hand}
                style={{
                    transform: `rotateZ(${date.getMinutes() * 6}deg)`
                }}
            />
            <div
                className={classes.sec_hand}
                style={{
                    transform: `rotateZ(${date.getSeconds() * 6}deg)`
                }}
            />
            <span className={classes.twelve}>12</span>
            <span className={classes.one}>1</span>
            <span className={classes.two}>2</span>
            <span className={classes.three}>3</span>
            <span className={classes.four}>4</span>
            <span className={classes.five}>5</span>
            <span className={classes.six}>6</span>
            <span className={classes.seven}>7</span>
            <span className={classes.eight}>8</span>
            <span className={classes.nine}>9</span>
            <span className={classes.ten}>10</span>
            <span className={classes.eleven}>11</span>
        </div>
    )
}