import React, {useState} from 'react'
import {action} from '@storybook/addon-actions'
import {Select} from "./Select";


export default {
    title: 'Select',
    component: Select,
}

export const WithValue = () => {
    const [value, setValue] = useState('2')
    return <>
        <Select
            value={value}
            onChange={setValue}
            items={[
                {title:'Ihor', value: '1'},
                {title: 'Gleb', value: '2'},
                {title: 'Meri', value: '3'}
                ]}/>
    </>
}

export const WithoutValue = () =>{
    const [value, setValue] = useState(null)
    return <>
        <Select
            value={value}
            onChange={setValue}
            items={[
                {title:'Ihor', value: '1'},
                {title: 'Gleb', value: '2'},
                {title: 'Meri', value: '3'}
            ]}/>
    </>
}





/*const Template: Story<SelectPropsType> = (args ) => <Select {...args} />
const callbackProps = {
    value: '---',
    onChange: callback
}
export const SelectCollapsedMode = Template.bind({})
SelectCollapsedMode.args = {
    ...callbackProps,
    items: [],
    onClick: onClickCallback
}
export const SelectUnCollapsedMode = Template.bind({})
SelectUnCollapsedMode.args = {
    ...callbackProps,
    items: [{title:'Ihor', value: 1}, {title: 'Gleb', value: 2}, {title: 'Meri', value: 3}],
    onClick:  onClickCallback
}
/!*
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Select                                               //fixIt-------------------------------------------
        titleValue={'Menu'}
        collapsed={value}
        onChange={() => setValue(!value)}
        items={[{title:'Ihor', value: 1}, {title: 'Gleb', value: 2}, {title: 'Meri', value: 3}]}
        onClick={(value) => {alert(`You, yes-yes you, with number ${value}, you will be HAPPY `)}}/>
}*!/*/
