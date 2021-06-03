import React, {useMemo, useState} from "react";

export default {
    title: 'useState demo'
}

function generateDate () {
    //difficult counting
    console.log('generateDate')
    return 1
}

export const Example1 = () => {
    console.log("Example1")

    /*const initValue = useMemo(generateDate, [])  //ВАРИАНТ-1: передаем вызов функции переменной и эту
    const [counter, setCounter] = useState(initValue) //переменную помещаем в state в качестве стартового значения*/

    //ВАРИАНТ-2: помещаем результат вызова функции в качестве начального значения
    //чтобы ф-ция была вызвана единожды при первой отрисовке ком-нты
    const [counter, setCounter] = useState(generateDate)

    //Вариант-3: помещаем функцию в обработчик
    return <>
        <button onClick={() => setCounter(state => state + 1 )}>+</button>
        {counter}
    </>

    /*//Вариант-2: создаем функцию которую передаем callback-ом
    const changer = (state: number) => {
        return state + 1
    }
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
    </>*/

    /*//Вариант-1: делаем изменения на прямую со стейтом
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
    </>*/
}