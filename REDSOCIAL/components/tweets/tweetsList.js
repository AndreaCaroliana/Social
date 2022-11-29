import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Tweet from './Tweet'

export default function TweetsList({tweets}) {
  const data=[]
  for (let index = 0; index < tweets.length; index++) {
    data.push({
      tweet:tweets[index],
      key:index
    });
    console.log(data)
  }

  const renderItem=({item})=>{

    return(
      <Tweet item={item}/>
    )

  }


  return (
    <View>
      <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item)=> item.key }
      />
    </View>
  )
}