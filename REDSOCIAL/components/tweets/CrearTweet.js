import { View, Text, TextInput,TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useValidation } from 'react-simple-form-validator';
import { useDispatch, useSelector} from 'react-redux'
import {addTweet} from "../../features/tweetsSlice"
import {newTweet} from "../home/controllers/controllers"
import { useState } from 'react'
export default function CrearTweet(){ 
    const auth=useSelector(state=>state.auth)
    const dispatch=useDispatch()  
    const [tweet, setTweet]=useState('')
    const [focus, setFocus]=useState({
        wasFocus:false
    })

    const { isFieldInError, getErrorsInField, isFormValid } = useValidation({
        fieldsRules: {
          tweet:{required:true, minlength: 5,}
        },
        state: {tweet}
      });

      const handleChange= (value)=>{
        setTweet(value)
      }
      const handleFocus= ()=>{
        setFocus({
            wasFocus:true
        })
      }
  return (
    <View>
      <TextInput
        value={tweet}
        placeholder='Something new?'
        onChangeText={(value)=>handleChange(value)}
        onFocus={()=>handleFocus}
      />
      <Text style={styles.text}>{isFieldInError('tweet') && getErrorsInField('tweet').join('\n')}</Text>
      <TouchableOpacity disabled={!isFormValid} style={styles.button}

       onPress={()=>{
        newTweet(auth.user,tweet,auth.token).then(response=> {
            if(response.status==201){
                dispatch(addTweet(tweet))
            }})
        }}>

          <Text style={styles.textButtom}>Whisper</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: 'purple',
        paddingVertical: 4,
        borderRadius: 40,
        margin: 10,
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