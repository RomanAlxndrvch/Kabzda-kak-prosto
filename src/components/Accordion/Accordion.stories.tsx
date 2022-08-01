import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Accordion, AccordionPropsType, MemoAccordion} from "./Accordion";
import {action} from "@storybook/addon-actions";

const getCaterotyObj = (categoryName: 'color' | 'main' | 'events') => ({
    table: {
        category: categoryName
    }
})

export default {
    title: 'Components/Accordion',
    component: Accordion,
    argTypes: {
        color: {
            control: 'color',
            ...getCaterotyObj('color')
        },
        setAccordionCollapsed: {...getCaterotyObj('events')},
        onChange: {...getCaterotyObj('events')},
        items: {...getCaterotyObj('main')},
        collapsed: {...getCaterotyObj('main')},
        title: {...getCaterotyObj('main')},
    }
}

const callback = action('Accordion Mode changed')

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

const callbackProps = {
    setAccordionCollapsed: callback,
    onChange: callback,
}

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    ...callbackProps,
    title: 'Menu',
    collapsed: true,
}

export const usersUnCollapsedMode = Template.bind({})
usersUnCollapsedMode.args = {
    ...callbackProps,
    title: 'Users',
    collapsed: false,
    items: [
        {
            title: 'Dimych',
            value: 1
        },
        {
            title: 'Valera',
            value: 2
        },
        {
            title: 'Artem',
            value: 3
        },
        {
            title: 'Viktor',
            value: 4
        }
    ],
}


export const ModeChanging: ComponentStory<typeof Accordion> = (args) => {
    const [value, setValue] = useState<boolean>(false)
    return <MemoAccordion {...args}
                          collapsed={value}
                          setAccordionCollapsed={() => setValue(!value)}
                          onClick={(id) => {
                              console.log(args)
                          }}/>
}
ModeChanging.args = {
    title: 'Users (ModeChanging)',
    items: [
        {
            title: 'Dimych',
            value: 1
        },
        {
            title: 'Valera',
            value: 2
        },
        {
            title: 'Artem',
            value: 3
        },
        {
            title: 'Viktor',
            value: 4
        },
        {
            title: 'Oleg',
            value: 5
        }
    ],
    setAccordionCollapsed: callback,
}
