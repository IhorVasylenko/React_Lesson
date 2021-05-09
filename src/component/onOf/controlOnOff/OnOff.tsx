import React from "react"
import s from '../OnOff.module.css'

export type OnOffPropsType = {
    on: boolean
    onChange: (on: boolean) => void
}

export function OnOff(props: OnOffPropsType) {

    return (
        <div className={s.wrapper}>
            <div className={`${s.button} ${props.on && s.activeOn}`} onClick={() => {props.onChange(true)}}>
                On
            </div>
            <div className={`${s.button} ${!props.on && s.unActiveOff}`} onClick={() => {props.onChange(false)}}>
                Of
            </div>
            <div className={`${s.indicator} ${!props.on && s.unActiveOff}`}>'_'</div>
        </div>
    )
}