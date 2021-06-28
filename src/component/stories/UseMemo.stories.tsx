import React, {useCallback, useMemo, useState} from "react";


export default {
    title: 'useMemo'
};


export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(0);
    const [b, setB] = useState<number>(0);

    let resultA: number;
    let resultB: number = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 1000000) {
                fake++
            }
            tempResultA = tempResultA * i
        }
        return tempResultA;
    }, [a]);

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return (
        <>
            <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
        </>
    );
};

const UsersSecret = (props: { users: Array<string> }) => {
    console.log("USERS SECRET");
    return (
        <div>{
            props.users.map((u, i) => <div key={i}>{u}</div>)
        }</div>
    );
};

const Users = React.memo(UsersSecret);

export const HelpsForReactMemo = () => {
    console.log("HelpsForReactMemo");

    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Ihar", "Gleb", "Mara", "Nata",]);

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf("a") > -1)
    }, [users]);

    const addUser = () => {
        const newUsers = [...users, "Jana" + new Date().getTime()];
        setUsers(newUsers);
    };

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => addUser()}>add user</button>
            {counter}
            <Users users={newArray}/>
        </>
    );
};


export const LikeUseCallback = () => {
    console.log("LikeUseCallback");

    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(["Java", "HTML", "React", "Redux"]);
    const [books2, setBooks2] = useState(["Java", "HTML", "React", "Redux"]);

    const memoizedAddBook = useMemo(() => {
        return () => {
            console.log("first memoized");
            const newBooks = [...books, "JavaScript" + new Date().getTime()];
            setBooks(newBooks);
        };
    }, [books]);

    const memoizedAddBook2 = useCallback(() => {
        console.log("first memoized2");
        const newBooks2 = [...books2, "JavaScript" + new Date().getTime()];
        setBooks2(newBooks2);
    }, [books2]);

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <Books addBook={memoizedAddBook} books={books}/>
            <Books addBook={memoizedAddBook2} books={books2}/>
        </>
    );
};

type BookSecretPropsType = {
    addBook: () => void
    books: string[]
};
const BooksSecret = (props: BookSecretPropsType) => {
    console.log("BOOKS SECRET");
    return (
        <div>
            <button onClick={() => props.addBook()}>add book</button>
            {props.books.map((b, i) => <div key={i}>{b}</div>)}
        </div>
    );
};
const Books = React.memo(BooksSecret);

