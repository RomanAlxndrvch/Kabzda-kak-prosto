import React, {useState} from "react";

type StarPropsType = {
    selected: boolean
    newValue: 1 | 2 | 3 | 4 | 5
    setValue: (e: 1 | 2 | 3 | 4 | 5) => void
}

export function UncontrolledRating() {

    const [value, setValue] = useState<number>(0)


    return (
        <div>
            <Star selected={value > 0} newValue={1} setValue={setValue}/>
            <Star selected={value > 1} newValue={2} setValue={setValue}/>
            <Star selected={value > 2} newValue={3} setValue={setValue}/>
            <Star selected={value > 3} newValue={4} setValue={setValue}/>
            <Star selected={value > 4} newValue={5} setValue={setValue}/>

            {/* <button onClick={setValue(0)}>Zero stars</button>*/}
        </div>
    )
}

function Star(props: StarPropsType) {
    return <span onClick={() => props.setValue(props.newValue)}>{props.selected ? <b> Star </b> : ' Star '}</span>
}