import { createSlice } from "@reduxjs/toolkit";

const initialState={
    tweets:[]
}

export const tweetsSlice=createSlice({
    name: 'tweets',
    initialState,
    reducers:{
        
        getUserTweets:(state,action)=>{
            state.tweets=action.payload.tweets
        },
        addTweet: (state,action)=>{
            state.tweets.push(action.payload)
        },
        deleteTweet:(state,action)=>{
            state.tweets.splice(action.payload, 1);
        }
    }
})

export const {getUserTweets,addTweet, deleteTweet}=tweetsSlice.actions

export default tweetsSlice.reducer
