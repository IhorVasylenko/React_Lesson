import React, {useState} from "react"
import s from '../OnOff.module.css'

export type OnOffPropsType = {
    onChange?: (on: boolean) => void
    defaultOn?: boolean
}

export function UnControlOnOff(props: OnOffPropsType) {
    let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false)

    const onClicked = () => {
        setOn(true)
        //props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        //props.onChange(false)
    }

    return (
        <div className={s.wrapper}>
            <div className={`${s.button} ${on && s.activeOn}`}
                 onClick={onClicked}>
                On
            </div>
            <div className={`${s.button} ${!on && s.unActiveOff}`}
                 onClick={offClicked}>
                Of
            </div>
            <div className={`${s.indicator} ${!on && s.unActiveOff}`}>'_'</div>
        </div>
    )
}