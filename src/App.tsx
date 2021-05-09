import React, {useState} from 'react'
import s from './App.module.css'
import {Rating, RatingValueType} from "./component/rating/controlRating/Rating"
import {OnOff} from "./component/onOf/controlOnOff/OnOff"
import {Accordion} from "./component/accordion/controlAccordion/Accordion"
import {UnControlRating} from "./component/rating/unControlRating/UnControlRating"
import {UnControlOnOff} from "./component/onOf/unControlOnOff/UnControlOnOff"
import { UnControlAccordion } from './component/accordion/unControlAccordion/UnControlAccordion'
import {
    ControlledCheckBox,
    ControlledInput, ControlledInputWithFixedValue,
    ControlledSelect, TrackValueOfUnControlledInput,
    UnControlledInput
} from "./component/stories/input.stories";
import {Select} from "./component/select/Select";


function App() {
  let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
  let [switchOn, setSwitchOn] = useState<boolean>(false)

  return (
      <div className={s.container}>
          {/*<Select items={[]} onChange={(x) => x} value={'-----'}/>*/}
       {/* <PageTitle title={'This is first component'}/>
        <OnOff on={switchOn} onChange={setSwitchOn}/> {switchOn.toString()}
        <Rating value={ratingValue} onClick={setRatingValue}/>
        <Accordion
            titleValue={'First accordion'}
            collapsed={accordionCollapsed}
            onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}
            // items={[{title:'Ihor', value: 1}, {title: 'Gleb', value: 2}, {title: 'Meri', value: 3}]}
            // onClick={(x) => x}
        />
        <ControlledInput />
        <ControlledCheckBox />
        <ControlledSelect />*/}

        {/*<PageTitle title={'This is second component'}/>
        <UnControlOnOff/>
        <UnControlOnOff onChange={setSwitchOn}/>
        <UnControlRating defaultValue={0} onChange={() => {}} />

        <UnControlledInput/>
        <ControlledInputWithFixedValue/>
        <TrackValueOfUnControlledInput/>*/}
          <UnControlAccordion titleValue={'Second accordion'}/>
      </div>
  )
}


type PageTitlePropsType = { title: string }

function PageTitle (props: PageTitlePropsType) {
  return <div>{props.title}</div>
}


export default App