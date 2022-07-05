import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {UncontrolledOnoff} from "./UncontrolledOnoff";
import {action} from "@storybook/addon-actions";


export default {
    title: 'UncontrolledOnoff',
    component: UncontrolledOnoff
}
const callback = action('Accordion Mode changed')

export const OnOff1 = () => <UncontrolledOnoff defaultOn={true} onChange={callback}/>
export const OnOff2 = () => <UncontrolledOnoff defaultOn={false} onChange={callback}/>





