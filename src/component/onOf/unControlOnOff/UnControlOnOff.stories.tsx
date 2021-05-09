import React, {useState} from 'react'
import {action} from '@storybook/addon-actions'
import {OnOffPropsType, UnControlOnOff} from './UnControlOnOff'
import {Meta, Story} from "@storybook/react";


export default {
    title: 'UnControlOnOff',
    component: UnControlOnOff,
} as Meta

const callback = action('on or off clicked')

const Template: Story<OnOffPropsType> = (args) => <UnControlOnOff {...args} />


export const OnMode = Template.bind({})
OnMode.args = {
    defaultOn: true,
    onChange: callback
}

export const OffMode = Template.bind({})
OffMode.args = {
    defaultOn: false,
    onChange: callback
}