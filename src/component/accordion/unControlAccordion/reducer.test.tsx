import {reducer, StateType, ToggleCollapsedAC} from "./reducer";

test('Collapsed should be true', () => {
    const state: StateType = {
        collapsed: false
    }

    const newState = reducer(state, ToggleCollapsedAC())

    expect(newState.collapsed).toBe(true)
})

test('Collapsed should be false', () => {
    const state: StateType = {
        collapsed: true
    }

    const newState = reducer(state, ToggleCollapsedAC())

    expect(newState.collapsed).toBe(false)
})

test('Reducer should throw error because action type is incorrect', () => {
    const state: StateType = {
        collapsed: true
    }

    expect(() => reducer(state, FakeAC())).toThrowError()
})

