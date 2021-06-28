import React, {useState} from "react";


export default {
    title: 'React.memo demo'
};


const NewMessagesCounter = (props: {count:number} ) => {
    return <div>{props.count}</div>
};
const NewMessagesCounterMemo = React.memo(NewMessagesCounter);



const UsersSecret = (props: {users: Array<string>} ) => {
    console.log("USERS");
    return (
        <div>{
        props.users.map((u,i) => <div key={i}>{u}</div>)
    }</div>
    );
};
const Users = React.memo(UsersSecret);


export const Example1 = () => {
    console.log("Example1");

    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Ihor", "Gleb", "Mari", "Nik",]);

    const addUser = () => {
        const newUsers = [...users, "Juli" + new Date().getTime()];
        setUsers(newUsers);
    };

    users.push("Nen" + new Date().getTime());

    return (
        <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
    <NewMessagesCounterMemo count={counter} />
    <Users users={users} />
    </>
    );
};