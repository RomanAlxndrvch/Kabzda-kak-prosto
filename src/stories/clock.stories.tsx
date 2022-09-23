import React, {useEffect, useState} from "react";

export default {
    title: 'clock demo'
}

export const Clock = () => {

    const date = new Date()
    const [hour, setHour] = useState(date.getHours())
    const [minutes, setMinutes] = useState(date.getMinutes())
    const [seconds, setSeconds] = useState(date.getSeconds())

    useEffect(() => {
        setInterval(() => {
            const localDare = new Date()
            setHour(() => localDare.getHours())
            setMinutes(() => localDare.getMinutes())
            setSeconds(() => localDare.getSeconds())
        }, 1000)
    }, [])

    return (
        <div>
            {hour}:{minutes}:{seconds > 9 ? `${seconds}` : `0${seconds}`}

        </div>
    )
}

