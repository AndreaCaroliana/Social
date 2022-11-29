import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import {deleteTweets} from "../home/controllers/controllers"
import {deleteTweet} from "../../features/tweetsSlice"
export default function Tweet({item}) {
  const auth=useSelector(state=>state.auth)
  const dispatch=useDispatch() 
  return (
    <View style={styles.container}>
      <Text>
        {item.tweet}-{item.key}
      </Text>
      <TouchableOpacity style={styles.button}
       onPress={()=>{
       deleteTweets(auth.user, item.key, auth.token).then(response=> {
        if(response.status==201){
            dispatch(deleteTweet(item.key))
        }})
        }}>
        <Text>Borra</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row'
  },
  button:{
      backgroundColor: 'purple',
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 40,
      margin: 1,
    },
  textButtom:{
      textAlign:'center',
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold'
  },
  text:{
      color:'red'
    }
})