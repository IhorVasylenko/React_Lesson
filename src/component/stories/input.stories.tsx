import React, {ChangeEvent, useRef, useState} from 'react'
import {action} from '@storybook/addon-actions'
import {Meta} from "@storybook/react";

export default {
    title: 'Input',
} as Meta

export const UnControlledInput = () => <input/>

export const ControlledInputWithFixedValue = () => <input value={'Go to IT'}/>

export const TrackValueOfUnControlledInput = () => {
    const [value, setValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {setValue(e.currentTarget.value)}

    return <><input onChange={onChange} /> - {value}</>
}

export const GetValueOfUnControlledInputWithFixedValueByButtonPress = () => {
    const [value, setValue] = useState('')
    const save = () => {setValue('yo')}

    return <><input /><button onClick={save}>save</button> - actual value: {value}</>
}

export const GetValueOfUnControlledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <><input ref={inputRef} /><button onClick={save}>save</button> - actual value: {value}</>
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <input value={parentValue} onChange={onChange}/>
}

export const ControlledCheckBox = () => {
    const [parentValue, setParentValue] = useState(false)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }

    return <input type='checkbox' checked={parentValue} onChange={onChange}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return (
        <select value={parentValue} onChange={onChange}>
            <option>none</option>
            <option value={'1'}>Kiev</option>
            <option value={'2'}>Minsk</option>
            <option value={'3'}>Moscow</option>
        </select>
    )
}







