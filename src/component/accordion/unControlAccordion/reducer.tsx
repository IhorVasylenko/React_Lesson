export type ToggleCollapsedAT = {
    type: 'TOGGLE_COLLAPSED'
}
type ActionType = ToggleCollapsedAT
export type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case "TOGGLE_COLLAPSED":
            return{...state, collapsed: !state.collapsed}
        default:
            throw new Error('Error!!!')
    }
    return state
}

export const ToggleCollapsedAC = (): ToggleCollapsedAT => ({type: "TOGGLE_COLLAPSED"})

