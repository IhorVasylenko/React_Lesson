import React, {useReducer} from "react"
import s from '../Accordion.module.css'
import {reducer, TOGGLE_COLLAPSED} from "./reducer";


export type AccordionPropsType = {
    titleValue: string
}

export function UnControlAccordion(props: AccordionPropsType) {
    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    return (
            <div>
                <AccordionTitle titleValue={props.titleValue} changeCollapsed={() => {dispatch({type: TOGGLE_COLLAPSED})}}/>
                {!state.collapsed && <AccordionBody/>}
            </div>
        )
}

type AccordionTitleType = {
    titleValue: string
    collapsed?: boolean
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