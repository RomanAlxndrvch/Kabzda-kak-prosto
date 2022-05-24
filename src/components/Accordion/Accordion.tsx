import React from "react";

type AccordionPropsType = {
    title: string
}
type AccordionTitlePropsType = {
    title: string
}

function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendered')
    return (
        <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody/>
        </div>
    )
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendered')
    return (
        <div><h3>{props.title}</h3></div>
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

export default Accordion