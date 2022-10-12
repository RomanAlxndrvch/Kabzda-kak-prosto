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

        const interval = setInterval(() => {
            console.log('setInterval')
            setCounter((state) => state + 1)
        }, 5000)
        return clearInterval(interval)

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

export const KeysTracker = () => {

    const [text, setText] = useState('')
    console.log('components render' + text)

    useEffect(() => {

        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }

        window.addEventListener('keypress', handler)

        return () => window.removeEventListener('keypress', handler)

    }, [text])

    return (
        <>
            Types text : {text}
        </>
    )
}