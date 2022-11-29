import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../features/auth'
import tweetsReducer from '../features/tweetsSlice'
const store= configureStore({
    reducer:{
        auth:authReducer,
        tweets:tweetsReducer
    }
})

export default store