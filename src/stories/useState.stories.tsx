import React, {useMemo, useState} from "react";

export default {
    title: 'useState demo'
}


function generateData() {
    console.log('generateData')
    return 63456546546
}

export const Example1 = () => {

    //1
    const initialValue = useMemo(generateData, [])

    //2
    const [counter, setCounter] = useState(() => generateData())

    const changer = (state: number) => state + 1

    return (
        <>
            <button onClick={() => setCounter(changer)}>
                Increase
            </button>
            {counter}
        </>
    )
}

