import React, {useState, useEffect} from "react";

export default {
    title: 'useEffect demo'
}

export const SimpleExample= () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log("SimpleExample")

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })
    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)')
        document.title = counter.toString()
    })
    useEffect(() => {
        console.log('useEffect only first render and every counter change')
        document.title = counter.toString()
    })

    return <>
        hello, {counter} {fake}
        <button onClick={() => setFake(fake => fake + 1 )}>fake</button>
        <button onClick={() => setCounter(state => state + 1 )}>counter</button>
    </>
}

export const SetTimeoutExample= () => {
    const [counter, setCounter] = useState(1)

    console.log("SetTimeoutExample")

    useEffect(() => {
        setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)
    }, [])

    return <>
        Hello, counter: {counter}
    </>
}