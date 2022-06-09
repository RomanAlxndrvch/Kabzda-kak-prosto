import React, {useState} from "react";

type AccordionPropsType = {
    title: string
    /* collapsed: boolean*/
}
type AccordionTitlePropsType = {
    title: string
    setCollapsed: (e: boolean) => void
    collapsed: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {

    const [collapsed, setCollapsed] = useState<boolean>(false)

    console.log('Accordion rendered')

    return (
        <div>
            <AccordionTitle title={props.title} setCollapsed={setCollapsed} collapsed={collapsed}/>
            {collapsed && <AccordionBody/>}
        </div>
    )
    /*if (collapsed) {
        return (
            <div>
                <AccordionTitle title={props.title} setCollapsed={setCollapsed} collapsed={collapsed}/>
                <AccordionBody/>

            </div>
        )
    }
    else {
        return (
            <AccordionTitle title={props.title} setCollapsed={setCollapsed} collapsed={collapsed}/>
        )
    }*/

}


function AccordionTitle(props: AccordionTitlePropsType) {

    const titleBtnHandler = () => {
        props.setCollapsed(!props.collapsed)
    }

    console.log('AccordionTitle rendered')
    return (
        <div onClick={titleBtnHandler}><h3>{props.title}</h3></div>
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

export default UncontrolledAccordion