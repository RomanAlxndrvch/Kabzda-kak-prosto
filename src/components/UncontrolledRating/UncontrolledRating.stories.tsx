import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {UncontrolledRating} from "./UncontrolledRating";
import {action} from "@storybook/addon-actions";


export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating
}

const callBack = () => {
    action('Rating changed')
}

export const DefaultMode1 = () => <UncontrolledRating defaultValue={1} onChange={callBack}/>
export const DefaultMode2 = () => <UncontrolledRating defaultValue={2} onChange={callBack}/>
export const DefaultMode3 = () => <UncontrolledRating defaultValue={3} onChange={callBack}/>
export const DefaultMode4 = () => <UncontrolledRating defaultValue={4} onChange={callBack}/>
export const DefaultMode5 = () => <UncontrolledRating defaultValue={5} onChange={callBack}/>
