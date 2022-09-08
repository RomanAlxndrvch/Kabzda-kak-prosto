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

