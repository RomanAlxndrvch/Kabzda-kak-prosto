import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Onoff} from "./components/Onoff/Onoff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";


function Hello() {
    console.log('Hello IT-KAMASUTRA!')
}

type PageTitlePropsType = {
    title: string
}

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    return (
        <div className="App">
            {/*   <Onoff/>
            <UncontrolledAccordion title={'Menu'}/>
            <UncontrolledAccordion title={'User'}/>
            <UncontrolledRating/>
            <Rating value={ratingValue} setRating={setRatingValue}/>*/}
            <Accordion title={'Menu'} collapsed={accordionCollapsed} setAccordionCollapsed={setAccordionCollapsed}/>
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
