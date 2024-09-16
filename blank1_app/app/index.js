import { View, Text } from 'react-native'
import React from 'react'

const Index = () => {
    const name = "Banana"
  return (
    <View style={{flex:1, justifyContent:"center", alignItems: "center"}}>
      <Fruit/>  
      <Text style={{fontSize: 25}}>I am in React native class {name} </Text>
      <Fruit/>
      <Fruit/>
    </View>
  )
}

export default Index

const  Fruit=()=>{
    return(
        <Text style={{
            fontSize: 25, 
            borderColor: "gray", 
            borderWidth:2, 
            height:40,
            backgroundColor: "blue",
            color: "white"}}>Fruit name is Apple</Text>
    )
}