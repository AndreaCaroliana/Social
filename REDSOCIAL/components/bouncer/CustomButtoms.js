import { Text, StyleSheet, View, TouchableOpacity, Alert} from 'react-native'
import React, { Component } from 'react'
import { getLogin, getRegister } from './controllers/controllers'
import {useSelector, useDispatch} from 'react-redux'
import { getAuth } from '../../features/auth'
import {getUserTweets} from "../../features/tweetsSlice"
const register=(data,navigation)=>{
  getRegister(data)
          .then(response=> Alert.alert(
          'Usuario registrado',
          response.msg,
          [{
            text:'OK',
            onPress: ()=>navigation.navigate(props.dir, {name:props.dir})
          }]))
}

const login=(data,handler)=>{
  getLogin(data).then(
    response=>{
      if(response.status===200){
        handler.dispatch(getAuth({
          token:response.token,
          username:response.username
        }))
        handler.dispatch(getUserTweets({
          tweets:response.tweets
        }))
        handler.navigation.navigate(handler.dir,{name:handler.dir})
      }
      else{
        Alert.alert(
          'Fallo inicio de sesion',
          response.msg,
          [{
            text:'OK'
          }])
      }
    }
  )
}



export function SubmitNavigationButtom(props){

  return(
    <View>
      <TouchableOpacity disabled={props.valid} style={styles.button} onPress={()=>register(props.send, props.navigation)}>
          <Text style={styles.text}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  )
}

export function NormalNavigationButtom(props){
  return(
    <View>
      <TouchableOpacity style={styles.button} onPress={()=> props.navigation.navigate(props.dir, {name:props.dir})}>
            <Text style={styles.text}>{props.text}</Text>
         </TouchableOpacity>
    </View>
  )
}

export function LoginButtom(props){
  const dispatch=useDispatch()
  const handler={
    dispatch,
    navigation:props.navigation,
    dir:props.dir
  }
  return(
  <View>
    <TouchableOpacity disabled={props.valid} style={styles.button} onPress={()=>login(props.send, handler)}>
          <Text style={styles.text}>{props.text}</Text>
       </TouchableOpacity>
  </View>)
}


export default class CustomButtoms extends Component {
  render() {
    return (
      <View>
         <TouchableOpacity style={styles.button} onPress={()=> this.props.navigation.navigate(this.props.dir, {name:this.props.dir})}>
            <Text style={styles.text}>{this.props.text}</Text>
         </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: 'purple',
        paddingVertical: 15,
        borderRadius: 40,
        margin: 10,
      },
    text:{
        textAlign:'center',
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    }
})