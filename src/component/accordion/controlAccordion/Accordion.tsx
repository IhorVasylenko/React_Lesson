import React from "react"
import s from "../Accordion.module.css";

type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle titleValue={props.titleValue} onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody onClick={props.onClick} items={props.items}/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    titleValue: string
    onChange: () => void
}
function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 className={s.cursorPointer} onClick={(e) => props.onChange()}>{props.titleValue}</h3>
}


export type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((i, index) => <li onClick={() => {props.onClick(i.value)}} key={index}>{i.title}</li>)}
        </ul>
    )
}