import {reducer, StateType, ToggleCollapsedAC} from "./Reducer";

test('collapsed should be true', () => {
    //data
    const state: StateType = {
        collapsed: false
    }

    //action
    const newState = reducer(state, ToggleCollapsedAC())

    //expectations
    expect(newState.collapsed).toBe(true)
})


test('Should be error', () => {
    //data
    const state: StateType = {
        collapsed: false
    }

    //action and expectations
    expect(() => {
        reducer(state, {type: 'FAKE-TYPE'})
    }).toThrowError()

})