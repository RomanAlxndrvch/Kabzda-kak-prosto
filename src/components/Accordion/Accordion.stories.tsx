import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Accordion',
    component: Accordion
}

const callback = action('Accordion Mode changed')

export const CollapsedMode = () => <Accordion title={'CollapsedMode'}
                                              collapsed={true}
                                              setAccordionCollapsed={callback}/>

export const UnCollapsedMode = () => <Accordion title={'UnCollapsedMode'}
                                                collapsed={false}
                                                setAccordionCollapsed={callback}/>


export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(false)
    return <Accordion title={'UnCollapsedMode'}
                      collapsed={value}
                      setAccordionCollapsed={() => {
                          setValue(!value)
                      }}/>
}
