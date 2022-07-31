import React, {useEffect, useState, KeyboardEvent} from "react";
import classes from './Select.module.css'

export type ItemType = {
    title: string
    value: string
}
type SelectPropsType = {
    items: ItemType[]
    onClick: (e: string) => void
    value?: number
}

export function Select(props: SelectPropsType) {
    const [showSelect, setShowSelect] = useState<boolean>(false)
    const [title, setTitle] = useState(props.value ? props.items[props.value].title : props.items[0].title)
    const [value, setValue] = useState<ItemType>(props.value ? props.items[props.value] : props.items[0])

    useEffect(() => {
        props.onClick(value.title)
        setTitle(value.title)
    }, [props, value])

    const changeValue = (elValue: string) => {
        const temp = props.items.find((e) => e.value === elValue)
        temp && setValue(temp)
    }

    const collapsedHandler = () => {
        setShowSelect(!showSelect)
    }

    let num = parseInt(value.value)
    const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length + 1; i++) {
                if (i === num && num !== 1) {
                    num--
                    setValue(props.items[num - 1])
                    break
                }
            }
        }
        if (e.key === 'ArrowDown') {
            for (let i = 0; i < props.items.length + 1; i++) {
                if (i === num && num !== props.items.length) {
                    num++
                    setValue(props.items[num - 1])
                    break
                }
            }
        }
    }

    return (
        <div className={classes.main} tabIndex={0} onKeyDown={onKeyDown}>
            <div className={classes.title} onClick={collapsedHandler}>{title}</div>
            {showSelect && props.items.map((el) => {
                const onClickHandler = () => {
                    console.log()
                    changeValue(el.value)
                    setTitle(value.title)
                    setShowSelect(!showSelect)
                }

                let selectedClassName = el.value === value.value ? classes.selectedClass : classes.selectors
                return <div key={el.value}
                            onMouseOver={() => {
                                setValue(el)
                            }}
                            className={selectedClassName}
                            onClick={onClickHandler}
                >{el.title} </div>
            })}
        </div>
    )
}