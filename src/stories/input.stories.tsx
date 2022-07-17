import React, {ChangeEvent, createRef, SetStateAction, useRef, useState} from "react";

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
        /*setValue(el.value)*/
        setValue(inputRef.current!.value)
    }

    return <><input ref={inputRef}/>
        <button onClick={onClickBtnHandler}>save
        </button>
        -
        actual value : {value}</>
}
