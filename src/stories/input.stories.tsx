import React, {ChangeEvent, createRef, SetStateAction, useEffect, useRef, useState} from "react";

export default {
    title: 'input'
}

export const UncontrolledInput = () => <input/>

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return <><input value={value} onChange={onChangeInputHandler}/> - {value}</>
}


export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState<string>('')
    const inputRef = useRef<HTMLInputElement>(null)

    const onClickBtnHandler = () => {
        /*const el = inputRef.current as HTMLInputElement*/
        /*setValue(el.value)*/ //or
        setValue(inputRef.current!.value)
    }

    return <><input ref={inputRef}/>
        <button onClick={onClickBtnHandler}>save</button>
        - actual value : {value}</>
}


export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState<string>('')

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <input value={parentValue} onChange={onChangeInputHandler}/>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState<boolean>(true)

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }

    return <input type={"checkbox"} onChange={onChangeInputHandler} checked={parentValue}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    
    const onChangeInputHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return (
        <select value={parentValue} onChange={onChangeInputHandler}>
            <option value={'1'}>Minsk</option>
            <option value={'2'}>Kiev</option>
            <option value={'3'}>Ottawa</option>
        </select>
    )
}


