import React from "react";

export type AccordionPropsType = {
    title: string
    collapsed: boolean
    /**
     *Callback  that is called when any item clicked
     * @param value of clicked item
     */
    setAccordionCollapsed: () => void
    onChange?: () => void
    /**
     *Elements that are showed when accordion is opened(not collapsed)
     */
    items?: Array<ItemType>
    /**
     *Optional color of header text
     */
    color?: string
}
type AccordionTitlePropsType = {
    title: string
    setAccordionCollapsed: () => void
    color?: string
}
type AccordionBodyType = {
    items?: Array<ItemType>
}
export type ItemType = {
    title: string
    value: number
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.title}
                            setAccordionCollapsed={props.setAccordionCollapsed}
                            color={props.color}
            />
            {!props.collapsed && <AccordionBody items={props.items}/>}
        </div>
    )
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendered')
    return (
        <div onClick={(e) => props.setAccordionCollapsed()}><h3
            style={{color: props.color ? props.color : 'black'}}
        >{props.title}</h3></div>
    )
}

function AccordionBody(props: AccordionBodyType) {
    console.log('AccordionBody rendered')
    const typeRender = (e: Array<ItemType>) => {
        return e.map((e) => {
            return (
                <ul>
                    <li>{e.title}</li>
                </ul>
            )
        })
    }
    return (
        <div>
            {props.items ? typeRender(props.items) : <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>}
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
