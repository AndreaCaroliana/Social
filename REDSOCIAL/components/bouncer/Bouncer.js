import { StyleSheet, Text, View } from 'react-native'
import CustomButtoms, { NormalNavigationButtom } from './CustomButtoms'
import React, { Component } from 'react'

export default class Bouncer extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text style={style.text}>Social React</Text>
        <View>
          <NormalNavigationButtom text='Login' navigation={this.props.navigation} dir='Login'/>
          <NormalNavigationButtom text='Sing in' navigation={this.props.navigation} dir='Register'/>
        </View>
      </View>
    )
  }
}

const style=StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        marginHorizontal: 30,
    },
    text: {
        fontSize: 50,
        marginVertical: 50,
        textAlign: 'center'
    },

})