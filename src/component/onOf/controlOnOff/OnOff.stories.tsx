import React, {useState} from 'react'
import {action} from '@storybook/addon-actions'
import {OnOff, OnOffPropsType} from './OnOff'
import {Meta, Story} from "@storybook/react";


export default {
    title: 'OnOff',
    component: OnOff,
} as Meta

const callback = action('on or off clicked')

const Template: Story<OnOffPropsType> = (args) => <OnOff {...args} />


export const OnMode = Template.bind({})
OnMode.args = {
    on: true,
    onChange: callback
}

export const OffMode = Template.bind({})
OffMode.args = {
    on: false,
    onChange: callback
}


export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOff on={value} onChange={setValue} />
}


//не отображает titleValue
/*export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return Template.bind({on: value, onChange: setValue})
}*/

// не работает, useState должен быть в функции
/*export const ModeChanging = Template.bind({})
const [value, setValue] = useState<boolean>(true)
ModeChanging.args = {
    on: value,
    onChange: setValue
}*/