import React from 'react';
import {ComponentStory} from '@storybook/react';
import {Select} from "./Select";


export default {
    title: 'Components/Select',
    component: Select,
}

export const FullSelect: ComponentStory<typeof Select> = (args) => {

    const selectedItem = (e: string) => {
        console.log(`${e} is selected`)
    }

    return (
        <Select items={args.items} onClick={selectedItem}/>
    )
}

FullSelect.args = {
    items: [
        {
            title: 'Dimych',
            value: '1'
        },
        {
            title: 'Valera',
            value: '2'
        },
        {
            title: 'Artem',
            value: '3'
        },
        {
            title: 'Viktor',
            value: '4'
        },
        {
            title: 'Oleg',
            value: '5'
        }
    ],
}