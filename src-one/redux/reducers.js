import {combineReducers} from 'redux'

const about = { // 默认
    count: 0
}

function counter(state = about, action) {
    console.log(state,action)
    switch (action.type) {
        case 'jia':
            state.count = state.count + action.number
            return {...state}
        default:
            return state
    }
}

export default combineReducers({
    counter
})
