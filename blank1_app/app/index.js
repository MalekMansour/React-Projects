import { View, Text } from 'react-native'
import React from 'react'

const Index = () => {
    const name = "Banana"
  return (
    <View style={{flex:1, justifyContent:"center", alignItems: "center"}}>
      <Text style={{fontSize: 25}}>I am in React native class {name} </Text>
      <Fruit/>
    </View>
  )
}

export default Index

const  Fruit=()=>{
    return(
        <Text style={{fontSize: 25}}>Fruit name is Apple</Text>
    )
}