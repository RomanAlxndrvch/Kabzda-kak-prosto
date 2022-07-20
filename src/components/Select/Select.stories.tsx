import React, {useState} from 'react';
import {ComponentStory} from '@storybook/react';
import {Select} from "./Select";


export default {
    title: 'Components/Select',
    component: Select,
}

export const FullSelect: ComponentStory<typeof Select> = (args) => {
    const [value, setValue] = useState<string>('Select...')

    const changeValue = (elValue: string) => {
        const temp = args.items.find((e) => e.value === elValue)
        temp && setValue(temp.title)
    }

    return (
        <Select value={value} items={args.items} onClick={changeValue}/>
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