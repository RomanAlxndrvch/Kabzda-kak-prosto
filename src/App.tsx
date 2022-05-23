import React from 'react';
import logo from './logo.svg';
import './App.css';
import {log} from "util";

function Hello() {
    console.log('Hello IT-KAMASUTRA!')
}

//Hello()

function App() {
    console.log('App rendering')
    return (
        <div className="App">
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
}

function AppTitle() {
    console.log('Title rendered')
    return (
        <>This is APP component</>
    )
}

function Rating() {
    console.log('Rating rendered')
    return (
        <>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </>
    )
}

function Star() {
    console.log('Star rendered')
    return (
        <>
            <div>Star</div>
        </>
    )
}

function Accordion() {
    console.log('Accordion rendered')
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    )
}

function AccordionTitle() {
    console.log('AccordionTitle rendered')
    return (
        <div><h3>Menu</h3></div>
    )
}

function AccordionBody() {
    console.log('AccordionBody rendered')
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )

}


export default App;
