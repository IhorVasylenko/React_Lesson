import React, {useState} from "react"
import s from '../Accordion.module.css'


export type AccordionPropsType = {
    titleValue: string
}

export function UnControlAccordion(props: AccordionPropsType) {
    let [collapsed, setCollapsed] = useState(true)

    return (
            <div>
                <AccordionTitle titleValue={props.titleValue} collapsed={true} changeCollapsed={() => {setCollapsed(!collapsed)}}/>
                {!collapsed && <AccordionBody/>}
            </div>
        )
}

type AccordionTitleType = {
    titleValue: string
    collapsed: boolean
    changeCollapsed: () => void
}

function AccordionTitle(props: AccordionTitleType) {
    return <h3 className={s.cursorPointer} onClick={() => {props.changeCollapsed()}}>{props.titleValue}</h3>
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}