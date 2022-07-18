import React, {useState} from 'react';
import './App.css';
import {Accordion, ItemType} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnoff} from "./components/UncontrolledOnoff/UncontrolledOnoff";
import {OnOff} from "./components/OnOff/OnOff";


function Hello() {
    console.log('Hello IT-KAMASUTRA!')
}

type PageTitlePropsType = {
    title: string
}

function App() {
    const items: Array<ItemType> = [
        {
            title: 'Dimych',
            value: 1
        },
        {
            title: 'Valera',
            value: 2
        },
        {
            title: 'Artem',
            value: 3
        },
        {
            title: 'Viktor',
            value: 4
        },
        {
            title: 'Oleg',
            value: 5
        }
    ]

    // States
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [on, setOn] = useState<boolean>(true)

    // Buttons functions
    const collapsedButtonHandler = () => {
        setAccordionCollapsed(!accordionCollapsed)
    }

    const onClickAccHandler = (e: number) => {
        console.log(e)
    }


    return (
        <div className="App">
            {/*   <UncontrolledOnoff/>
            <UncontrolledAccordion title={'Menu'}/>
            <UncontrolledAccordion title={'User'}/>
            <UncontrolledRating/>*/}
            <Rating value={ratingValue} setRating={setRatingValue}/>
            <UncontrolledOnoff onChange={setOn}/> {on.toString()}
            <Accordion title={'Menu'} collapsed={accordionCollapsed} setAccordionCollapsed={collapsedButtonHandler}
                       items={items} onClick={onClickAccHandler}/>
            <OnOff switcher={on} changeSwitcher={setOn}/>

        </div>
    );

}


function PageTitle(props: PageTitlePropsType) {
    console.log('Title rendered')
    return (
        <div><h1>{props.title}</h1></div>
    )
}


export default App;
