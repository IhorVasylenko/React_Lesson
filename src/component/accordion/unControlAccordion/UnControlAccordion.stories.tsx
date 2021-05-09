import React, {useState} from 'react'
import {AccordionPropsType, UnControlAccordion} from './UnControlAccordion'
import {Meta, Story} from "@storybook/react";


export default {
    title: 'UnControlAccordion',
    component: UnControlAccordion,
} as Meta

const Template: Story<AccordionPropsType> = (args) => <UnControlAccordion {...args} />


export const ModeChanging = Template.bind({})
ModeChanging.args = {
    titleValue: 'Menu'
}

