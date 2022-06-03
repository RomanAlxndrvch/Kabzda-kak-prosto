import React from 'react';
import './App.css';
import Accordion, {Accordion2} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";


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
            <Rating value={3}/>*/}
            <Accordion2 title={'Menu'} collapsed={true}/>
            <Accordion2 title={'Users'} collapsed={false}/>
            <Accordion2 title={'Menu'} collapsed={true}/>
            {/*   Article 2*/}
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
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
