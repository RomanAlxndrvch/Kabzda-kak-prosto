import React, {useState} from 'react';
import './App.css';
import Accordion, {Accordion2} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {Onoff} from "./components/Onoff/Onoff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";


function Hello() {
    console.log('Hello IT-KAMASUTRA!')
}

//Hello()

type PageTitlePropsType = {
    title: string
}

function App() {
    console.log('App rendering')

    return (
        <div className="App">
            {/*   <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My Friends!'}/>
            Article 1
            <UncontrolledRating value={3}/>*/}
            {/*<Accordion2 title={'Menu'} collapsed={true}/>
            <Accordion2 title={'Users'} collapsed={false}/>
            <Accordion2 title={'Menu'} collapsed={true}/>*/}
            {/*   Article 2*/}
            {/*<UncontrolledRating value={0}/>
            <UncontrolledRating value={1}/>
            <UncontrolledRating value={2}/>
            <UncontrolledRating value={3}/>
            <UncontrolledRating value={4}/>
            <UncontrolledRating value={5}/>*/}
            <Onoff/>
            <UncontrolledAccordion title={'Menu'}/>
            <UncontrolledAccordion title={'User'}/>
            <UncontrolledRating/>
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
