import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { getTweets } from '../controllers/controllers'
import TweetsList from '../../tweets/TweetsList'
import CrearTweet from '../../tweets/CrearTweet'
export default function Feed() {
  const auth=useSelector(state=>state.auth)
  const userTweets=useSelector(state=>state.tweets)
  return (
    <View>
      <Text>{auth.user}</Text>
      <CrearTweet/>
      <TweetsList tweets={userTweets.tweets}></TweetsList>
    </View>
  )
}