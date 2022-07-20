import React, {useEffect, useState} from "react";
import classes from './Select.module.css'

export type ItemType = {
    title: string
    value: string
}
type SelectPropsType = {
    items: ItemType[]
    onClick: (e: string) => void
}

export function Select(props: SelectPropsType) {
    const [showSelect, setShowSelect] = useState<boolean>(false)
    const [value, setValue] = useState<string>('Select...')

    useEffect(() => {
        props.onClick(value)
    }, [props, value])

    const changeValue = (elValue: string) => {
        const temp = props.items.find((e) => e.value === elValue)
        temp && setValue(temp.title)
    }

    const collapsedHandler = () => {
        setShowSelect(!showSelect)
    }

    const arr = props.items.filter(e => e.title !== value)
    
    return (
        <div className={classes.main}>
            <div className={classes.title} onClick={collapsedHandler}>{value}</div>
            {showSelect && arr.map((el) => {
                const onClickHandler = () => {
                    changeValue(el.value)
                    setShowSelect(!showSelect)
                }
                return <div className={classes.selectors}
                            onClick={onClickHandler}
                >{el.title} </div>
            })}
        </div>
    )
}