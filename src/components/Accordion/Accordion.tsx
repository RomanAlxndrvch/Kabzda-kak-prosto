import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
    setAccordionCollapsed: () => void
}
type AccordionTitlePropsType = {
    title: string
    setAccordionCollapsed: () => void
}

export function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.title}
                            setAccordionCollapsed={props.setAccordionCollapsed}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendered')
    return (
        <div onClick={(e) => props.setAccordionCollapsed()}><h3>{props.title}</h3></div>
    )
}

function AccordionBody() {
    console.log('AccordionBody rendered')
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}


/*
export function Accordion2(props: AccordionPropsType) {
    console.log('Accordion rendered')
    return (
        <div>
            <AccordionTitle title={props.title}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}*/
