import React, {useState} from "react";


type StarPropsType = {
    selected: boolean

}

export function UncontrolledRating() {

    const [value, setValue] = useState<number>(0)

    const starBtnHandler = (value: number) => {
        return (event: React.MouseEvent) => {
            setValue(value)
        }

    }

    console.log('UncontrolledRating rendered')
    return (
        <div>
            <span onClick={starBtnHandler(1)}>
                <Star selected={value > 0}/>
            </span>

            <span onClick={starBtnHandler(2)}>
                <Star selected={value > 1}/>
            </span>

            <span onClick={starBtnHandler(3)}>
                <Star selected={value > 2}/>
            </span>

            <span onClick={starBtnHandler(4)}>
                <Star selected={value > 3}/>
            </span>

            <span onClick={starBtnHandler(5)}>
                <Star selected={value > 4}/>
            </span>

            <button onClick={starBtnHandler(0)}>Zero stars</button>
        </div>
    )

}


function Star(props: StarPropsType) {
    console.log('Star rendered')
    return props.selected ? <span> <b> Star </b></span> : <span> Star </span>
}