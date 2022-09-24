import React, {useState} from "react";
import {Clock} from "./Clock";
import {MyClock} from "./MyClock";


export default {
    title: 'Clock',
    component: Clock
}

export const BaseExample = () => {

    const [clockStyle, setClockStyle] = useState<'analog' | 'digital'>('analog')

    return (
        <div>
            <button onClick={() => {
                setClockStyle("analog")
            }}>ANALOG
            </button>
            <button onClick={() => {
                setClockStyle("digital")
            }}>DIGITAL
            </button>

            {clockStyle === "analog" ? <MyClock/> : <Clock/>}
        </div>
    )
}