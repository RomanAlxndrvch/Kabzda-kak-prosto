import React from "react";

export type AccordionPropsType = {
    title: string
    collapsed: boolean
    setAccordionCollapsed: () => void
    onChange?: () => void
    items: Array<ItemType>
    color?: string
    onClick: (e: any) => void
}
type AccordionTitlePropsType = {
    title: string
    setAccordionCollapsed: () => void
    color?: string
}
type AccordionBodyType = {
    items: Array<ItemType>
    onClick: (e: any) => void
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
            {!props.collapsed && <AccordionBody onClick={props.onClick} items={props.items}/>}
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
            const onClickHandler = () => {
                props.onClick(e.value)
                console.log(`${e.title} clicked`)
            }
            return (
                <li onClick={onClickHandler} key={e.value}>{e.title}</li>
            )
        })
    }
    return (
        <div>
            <ul>
                {props.items ? typeRender(props.items) : props.items}
                {/*   <li>1</li>
                <li>2</li>
                <li>3</li>*/}
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
