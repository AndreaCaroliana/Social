import { StyleSheet, View, TextInput, Text, Switch } from 'react-native'
import React, { useState } from 'react'
import { SubmitNavigationButtom } from '../bouncer/CustomButtoms'
import { useValidation } from 'react-simple-form-validator';
import { Colors } from 'react-native/Libraries/NewAppScreen';
export default function Register(props) {

  const [username, setName]=useState('');
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const [confirmPassword, setConfirmPassword]=useState('');
  const [user,setUser]=useState({
    username:false,
    email:false,
    password:false,
    confirmPassword:false,
  })

  const { isFieldInError, getErrorsInField, isFormValid } = useValidation({
    fieldsRules: {
      email: { email: true, required: true},
      username: {minlength:8, maxlength:13, hasSpecialCharacter: false,required: true},
      password:{required: true, hasSpecialCharacter: false,  minlength: 8},
      confirmPassword:{required: true, hasSpecialCharacter:false,  minlength: 8}
    },
    state: { email, username, password, confirmPassword}
  });

  const handleTouchChanges=(field)=>{
    setUser({
      ...user,
      [field]:true
    })
  }

  const handleChanges=(name, value, flag)=>{
    switch (name) {
      case 'username':
        flag? setName(value): handleTouchChanges(name)
        break;
      case 'email':
        flag? setEmail(value): handleTouchChanges(name)
        break;
      case 'password':
        flag? setPassword(value): handleTouchChanges(name)
        break;
      case 'confirmPassword':
        flag? setConfirmPassword(value): handleTouchChanges(name)
        break;        
      default:
        break;
    }
  }

  return (
    <View style={styles.container}>

      <TextInput style={styles.input}
       placeholder=' Username'
       value={username}
       onChangeText={(value)=>{handleChanges('username',value, true)}}
       onBlur={(value)=>{handleChanges('username',value, false)}}/>

       <Text style={styles.text}>
       {user.username && isFieldInError('username') && getErrorsInField('username').join('\n') }
       </Text>

      <TextInput style={styles.input} 
      placeholder=' Email'
      value={email}
      onChangeText={(value)=>{handleChanges('email',value,true)}}
      onBlur={(value)=>{handleChanges('email',value, false)}}/>

        <Text style={styles.text}>
       {user.email && isFieldInError('email') && getErrorsInField('email').join('\n')}
       </Text>

      <TextInput style={styles.input}
      secureTextEntry={true}
      placeholder=' Password'
      value={password} 
      onChangeText={(value)=>{handleChanges('password',value,true)}}
      onBlur={(value)=>{handleChanges('password',value, false)}}/>

        <Text style={styles.text}>
       {user.password && isFieldInError('password') && getErrorsInField('password').join('\n')}
       </Text>

      <TextInput style={styles.input}
      secureTextEntry={true}
      placeholder=' Confirm Password' 
      value={confirmPassword} 
      onChangeText={(value)=>{handleChanges('confirmPassword',value,true)}}
      onBlur={(value)=>{handleChanges('confirmPassword',value, false)}}/>

      <Text style={styles.text}>
       {user.confirmPassword && isFieldInError('confirmPassword') && getErrorsInField('confirmPassword').join('\n')}
       </Text>


      <SubmitNavigationButtom valid={!isFormValid} navigation={props.navigation} text='Sign In' dir='Login' send={{username,email,password}}/>
    </View>
  )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent: 'center',
        marginHorizontal: 20
    },
    input:{
        marginVertical: 20,
        borderWidth: 1,
        borderColor: '#B5B2B2',
        padding: 10
    },
    text:{
      color:'red'
    }
})