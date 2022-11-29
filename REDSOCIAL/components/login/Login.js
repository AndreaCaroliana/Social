import { StyleSheet, View, TextInput, Text } from 'react-native'
import React from 'react'
import {LoginButtom} from '../bouncer/CustomButtoms'
import { useValidation } from 'react-simple-form-validator';
import { useState } from 'react'

export default function Login(props){
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const [user,setUser]=useState({
    email:false,
    password:false
  })

  const { isFieldInError, getErrorsInField, isFormValid } = useValidation({
    fieldsRules: {
      email: {required:true,email: true},
      password:{required: true, hasSpecialCharacter: false,  minlength: 8},
    },
    state: { email, password}
  });

  const handleTouchChanges=(field)=>{
    setUser({
      [field]:true
    })
  }

  const handleChange=(name, value, flag)=>{
    switch (name) {
      case 'email':
          flag? setEmail(value): handleTouchChanges(name)
        break;
      case 'password':
          flag? setPassword(value): handleTouchChanges(name)
        break;
      default:
        break;
    }
  }

  return (
    <View>
      <TextInput value={email} placeholder='Email'
       onChangeText={(value)=> handleChange('email',value,true)}
        onBlur={(value)=> handleChange('email',value,false)}/>

      <Text style={styles.text}>{user.email && isFieldInError('email') && getErrorsInField('email').join('\n')}</Text>

      <TextInput secureTextEntry={true} value={password} placeholder='password'
       onChangeText={(value)=>handleChange('password',value,true)} 
       onBlur={(value)=>handleChange('password',value,false)}/>

      <Text style={styles.text}>{user.password && isFieldInError('password') && getErrorsInField('password').join('\n')}</Text>

      <LoginButtom valid={!isFormValid} navigation={props.navigation} dir='Home' text='login' send={{email, password}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  text:{
    color:'red'
  }
})