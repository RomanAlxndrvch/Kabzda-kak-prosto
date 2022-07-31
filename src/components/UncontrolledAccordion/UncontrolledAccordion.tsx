import React, {MouseEvent, useReducer} from "react";
import {reducer, ToggleCollapsedAC} from "./Reducer";

type AccordionPropsType = {
    title: string
    /* collapsed: boolean*/
}
type AccordionTitlePropsType = {
    title: string
    setCollapsed: (e: MouseEvent<HTMLDivElement>) => void
    collapsed: boolean
}

export function UncontrolledAccordion(props: AccordionPropsType) {

    //const [state, setCollapsed] = useState<boolean>(false)
    const [state, dispatchState] = useReducer(reducer, {collapsed: true})

    const changeCollapsed = () => {
        dispatchState(ToggleCollapsedAC())
    }
    return (
        <div>
            <AccordionTitle title={props.title} setCollapsed={changeCollapsed} collapsed={state.collapsed}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}

export function AccordionTitle(props: AccordionTitlePropsType) {
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