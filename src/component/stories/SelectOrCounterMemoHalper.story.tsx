import React, {ChangeEvent, useMemo, useState} from 'react'
import {Meta} from "@storybook/react";

export default {
    title: 'SelectAndCounterMemo',
} as Meta


type OneModelType = {
    title: string
    model: string
    speed: number
}
type TransportType = {
    id: number
    info: OneModelType
    isDrive: boolean
}
type SelectPropsType = {
    transports: TransportType[]
    value: string
}
const Select = (props: SelectPropsType) => {
    console.log(props.value)
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return (
        <select value={parentValue} onChange={onChange}>
            <option>none</option>
            {props.transports.map(t => <option key={t.id} value={t.id}>{t.info.title}</option>)}
        </select>
    )
}
const SelectMemo = React.memo(Select)

export const SelectVSCounter = () => {
    const [transports, setTransports] = useState<TransportType[]>([
            {id: 1, info: {title: 'Ducati', model: 'Monster', speed: 240}, isDrive: true},
            {id: 2, info: {title: 'Harley', model: 'XL1200', speed: 180}, isDrive: false},
            {id: 3, info: {title: 'MVAugusta', model: 'Dragster', speed: 300}, isDrive: false},
            {id: 4, info: {title: 'Mercedes', model: 'E250', speed: 199}, isDrive: true},
            {id: 5, info: {title: 'Audi', model: 'A7', speed: 301}, isDrive: false},
            {id: 6, info: {title: 'BMW', model: 'X6', speed: 240}, isDrive: true}
        ])
    const [counter, setCounter] = useState(0)

    const fasts = useMemo(()=> {
        const fasts = transports.filter(t => t.info.speed > 200)
        return fasts
    }, [transports])
    const name = useMemo(()=> {
        const name = transports.filter(t => t.info.model.toLowerCase().indexOf("a") > -1)
        return name
    }, [transports])
    const isDrive = useMemo(()=> {
        const isDrive = transports.filter(t => t.isDrive)
        return isDrive
    }, [transports])
    const isNotDrive = useMemo(()=> {
        const isNotDrive = transports.filter(t => !t.isDrive)
        return isNotDrive
    }, [transports])

    return (
        <div>
            <SelectMemo transports={fasts} value={"fasts"}/>
            <SelectMemo transports={name} value={"name"}/>
            <SelectMemo transports={isDrive} value={"isDrive"}/>
            <SelectMemo transports={isNotDrive} value={"isNotDrive"}/>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <span>{counter}</span>
            <button onClick={() => setTransports([...transports, {id: 7, info: {title: 'Java', model: '350', speed: 40}, isDrive: true}])}>+</button>
        </div>
    )
};


/*const [transports, setTransports] = useState<TransportType>({
        ['bikes']: [
            {id: 1, info: {title: 'Ducati', model: 'Monster', speed: 240}, isDrive: true},
            {id: 2, info: {title: 'Harley', model: 'XL1200', speed: 180}, isDrive: false},
            {id: 3, info: {title: 'MVAugusta', model: 'Dragster', speed: 300}, isDrive: false}
        ],
        ['cars']: [
            {id: 4, info: {title: 'Mercedes', model: 'E250', speed: 199}, isDrive: true},
            {id: 5, info: {title: 'Audi', model: 'A7', speed: 301}, isDrive: false},
            {id: 6, info: {title: 'BMW', model: 'X6', speed: 240}, isDrive: true}
        ],
    })*/
/*type OneModelType = {
    title: string
    model: string
    speed: number
}
type OneTransportType = {
    id: number
    info: OneModelType
    isDrive: boolean
}
type TransportType = {
    [key: string]: OneTransportType[]
}*/