import {User_reducer} from './user_reducer.js'
import {Tweet_reducer} from './tweet_reducer.js'
import {Authen_User} from './authen_reducer.js'
import {combineReducers} from 'redux'
import {loadingBarReducer} from 'react-redux-loading'
export default combineReducers({
    Authen_User,
    User_reducer,
    Tweet_reducer,
    loadingBar:loadingBarReducer
})