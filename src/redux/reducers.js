import { combineReducers } from 'redux'

const articles = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_ARTICLES' :
            return action.value 
        default:
            return state
    }
}

export default combineReducers({ articles })