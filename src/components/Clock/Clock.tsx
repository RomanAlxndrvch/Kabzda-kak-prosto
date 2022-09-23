import React, {useEffect, useState} from "react";

type ClockPropsType = {}

export const Clock = (props: ClockPropsType) => {

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
        <div>
            <span>{getTwoDigitsString(date.getHours())}</span>:
            <span>{getTwoDigitsString(date.getMinutes())}</span>:
            <span>{getTwoDigitsString(date.getSeconds())}</span>
        </div>
    )
}