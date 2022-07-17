import React, {useState} from 'react';
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";


export default {
    title: 'OnOff',
    component: OnOff
}

const callback = action('on or off clicked')

export const OnMode = () => <OnOff switcher={true} changeSwitcher={callback}/>
export const OffMode = () => <OnOff switcher={false} changeSwitcher={callback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(false)
    return <OnOff switcher={value} changeSwitcher={setValue}/>
}
