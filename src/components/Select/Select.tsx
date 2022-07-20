import React, {useState} from "react";
import classes from './Select.module.css'

export type ItemType = {
    title: string
    value: string
}
type SelectPropsType = {
    value: string
    onClick: (e: string) => void
    items: ItemType[]
}


export function Select(props: SelectPropsType) {
    const [showSelect, setShowSelect] = useState<boolean>(true)

    const collapsedHandler = () => {
        setShowSelect(!showSelect)

    }

    return (
        <div className={classes.selector}>
            <div onClick={collapsedHandler}>{props.value}</div>
            {showSelect && props.items.map((el) => {
                const onClickHandler = () => {
                    props.onClick(el.value)
                    setShowSelect(!showSelect)
                }
                return <div
                    onClick={onClickHandler}
                >{el.title} </div>
            })}
        </div>
    )
}


