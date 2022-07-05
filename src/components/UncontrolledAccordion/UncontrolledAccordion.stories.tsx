import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {AccordionTitle, UncontrolledAccordion} from "./UncontrolledAccordion";
import {action} from "@storybook/addon-actions";


export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion
}
const callback = action('Accordion Mode changed')

export const CollapsedAccordion = () => <UncontrolledAccordion title={'Collapsed Accordion'}/>
export const AccordionTile = () => <AccordionTitle title={'AccordionTitle'} collapsed={true}
                                                   setCollapsed={(e) => callback()}/>



