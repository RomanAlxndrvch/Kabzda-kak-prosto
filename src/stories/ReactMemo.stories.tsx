import React, {useState} from "react";

export default {
    title: 'React.memo demo'
}

const NewMessagesCounter = (props: { count: number }) => {
    return (
        <div>{props.count}</div>
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

export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem',])

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>
                Increase
            </button>
            <NewMessagesCounter count={counter}/>
            <MemoUsers users={users}/>
        </>
    )
}

