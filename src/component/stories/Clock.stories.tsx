import React, {useState, useEffect} from "react";

export default {
    title: 'clock demo'
}



export const Clock= () => {
    const [state, setState] = useState(0)

    const hours = new Date().getHours()
    const minutes = new Date().getMinutes()
    const seconds = new Date().getSeconds()

    const hoursNow = (hours < 10) ? '0'+hours : hours
    const minutesNow = (minutes < 10) ? '0'+minutes : minutes
    const secondsNow = (seconds < 10) ? '0'+seconds : seconds



    useEffect(() => {
        setInterval(() => {
            setState(state => state + 1)
        }, 1000)
    }, [])

    return <>
        {hoursNow}:{minutesNow}:{secondsNow}
    </>
}
