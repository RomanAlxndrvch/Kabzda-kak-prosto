import React, {useEffect, useMemo, useState} from "react";

export default {
    title: 'useEffect demo'
}


function generateData() {
    console.log('generateData')
    return 1
}

export const SimpleExample = () => {
    console.log('Simple Effect')
    const [counter, setCounter] = useState(() => generateData())
    const [fake, setFake] = useState(() => generateData())

    useEffect(() => {
        console.log('useEffect')
        document.title = counter.toString()
    }, [counter])

    return (
        <>
            Hello {counter}
            <button onClick={() => setCounter(counter + 1)}>
                Increase
            </button>

            <button onClick={() => setFake(fake + 1)}>
                Fake
            </button>
            {fake}

        </>
    )
}


export const SetTimeoutExample = () => {
    console.log('Simple Effect')
    const [counter, setCounter] = useState(() => generateData())
    const [fake, setFake] = useState(() => generateData())


    useEffect(() => {

        setInterval(() => {
            console.log('setInterval')
            setCounter((state) => state + 1)
        }, 5000)

    }, [])

    /*useEffect(() => {

        setTimeout(() => {
            console.log('setTimeOut')
            document.title = counter.toString()
        }, 1000)

    }, [counter])*/

    /*    setTimeout(() => {
            console.log('setTimeOut')
            document.title = counter.toString()
        }, 1000)*/

    return (
        <>
            Hello {counter}
            <button onClick={() => setCounter(counter + 1)}>
                Increase
            </button>

            <button onClick={() => setFake(fake + 1)}>
                Fake
            </button>
            {fake}

        </>
    )
}

