import React, {useState} from 'react'
import {action} from '@storybook/addon-actions'
import {Accordion, AccordionPropsType} from './Accordion'
import {Meta, Story} from "@storybook/react";


export default {
    title: 'Accordion',
    component: Accordion,
} as Meta

const callback = action('accordion mode change event fired')
const onClickCallback = action('som item was clicked')

const Template: Story<AccordionPropsType> = (args ) => <Accordion {...args} />

const callbackProps = {
    titleValue: 'Menu',
    onChange: callback
}


export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    ...callbackProps,
    collapsed: true,
    items: [],
    onClick: onClickCallback
}

export const MenuUnCollapsedMode = Template.bind({})
MenuUnCollapsedMode.args = {
    ...callbackProps,
    collapsed: false,
    items: [{title:'Ihor', value: 1}, {title: 'Gleb', value: 2}, {title: 'Meri', value: 3}],
    onClick:  onClickCallback
}


export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion
        titleValue={'Menu'}
        collapsed={value}
        onChange={() => setValue(!value)}
        items={[{title:'Ihor', value: 1}, {title: 'Gleb', value: 2}, {title: 'Meri', value: 3}]}
        onClick={(value) => {alert(`You, yes-yes you, with number ${value}, you will be HAPPY `)}}/>
}