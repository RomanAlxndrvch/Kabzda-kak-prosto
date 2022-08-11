import React, {ChangeEvent, useMemo, useState} from "react";

export default {
    title: 'useMemo'
}


export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let temResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }
            temResultA = temResultA * i
        }
        return temResultA

    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    const onChangeA = (e: ChangeEvent<HTMLInputElement>) => {
        setA(+e.currentTarget.value)
    }

    const onChangeB = (e: ChangeEvent<HTMLInputElement>) => {
        setB(+e.currentTarget.value)
    }

    return (
        <>
            <input value={a} onChange={onChangeA}/>
            <input value={b} onChange={onChangeB}/>
            <hr/>
            <div>
                Result for A:{resultA}
            </div>
            <div>
                Result for B:{resultB}
            </div>
        </>
    )
}

const Users = (props: { users: Array<string> }) => {
    console.log('Users rerender')
    return (
        <div>{props.users.map((el, i) => {
            return <div key={i}>{el}</div>
        })}</div>
    )
}
const MemoUsers = React.memo(Users)

export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem',])

    const newArray = useMemo(() => {
        return users.filter(el => el.toLowerCase().indexOf('a') > -1)
    }, [users])

    const addUser = () => {
        setUsers([...users, 'Sveta'])
    }
    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>
                Increase
            </button>
            <button onClick={addUser}>add users</button>
            {counter}
            <MemoUsers users={newArray}/>
        </>
    )
}
