type ActionType = {
    type: string
}

export type StateType = {
    collapsed: boolean
}

export const ToggleCollapsedAC = () => {
    return ({
        type: 'TOGGLE-COLLAPSED'
    })
}


export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case 'TOGGLE-COLLAPSED': {
            return {...state, collapsed: !state.collapsed}
        }
        default: {
            // return state
            throw new Error('Wrong action')
        }
    }
}
