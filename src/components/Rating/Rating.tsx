import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5
export type RatingPropsType = {
    value: RatingValueType
    setRating: (e: RatingValueType) => void
}
export type StarPropsType = {
    selected: boolean
    value: RatingValueType
    setRating: (e: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {

    return (
        <div>
            <Star selected={props.value > 0} value={1} setRating={props.setRating}/>
            <Star selected={props.value > 1} value={2} setRating={props.setRating}/>
            <Star selected={props.value > 2} value={3} setRating={props.setRating}/>
            <Star selected={props.value > 3} value={4} setRating={props.setRating}/>
            <Star selected={props.value > 4} value={5} setRating={props.setRating}/>
        </div>
    )

}


function Star(props: StarPropsType) {
    return <span onClick={() => props.setRating(props.value)}>{props.selected ? <b> Star </b> : " Star "}</span>
}