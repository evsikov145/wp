import {initialState} from '../store/store'

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ABOUT_TEXT':
            return {
                ...state
            }
        case 'UPDATE_ABOUT_TITLE':
            return {
                ...state,
                title: action.payload
            }
        default:
            return state
    }
}
