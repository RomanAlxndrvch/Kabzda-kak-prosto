import React, {useState, MouseEvent} from "react";

type AccordionPropsType = {
    title: string
    /* collapsed: boolean*/
}
type AccordionTitlePropsType = {
    title: string
    setCollapsed: (e: MouseEvent<HTMLDivElement>) => void
    collapsed: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const changeCollapsed = () => {
        setCollapsed(!collapsed)
    }
    return (
        <div>
            <AccordionTitle title={props.title} setCollapsed={changeCollapsed} collapsed={collapsed}/>
            {collapsed && <AccordionBody/>}
        </div>
    )
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.setCollapsed}>{props.title}</h3>
    )
}

function AccordionBody() {
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