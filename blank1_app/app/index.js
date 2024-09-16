import { View, Text } from 'react-native'
import React from 'react'

const Index = () => {
    const name = "Banana"
  return (
    <View style={{flex:1, justifyContent:"center", alignItems: "center"}}>
      <Text style={{fontSize: 25}}>I am in React native class {name} </Text>
      <Fruit/>
      <Fruit/>
    </View>
  )
}

export default Index

const Fruit=()=>{
    return(
        <View>
        <Text style={{
            fontSize: 25, 
            borderColor: "gray", 
            borderWidth:2, 
            height:40,
            backgroundColor: "blue",
            color: "white"}}>Fruit name is Apple</Text>
            <Empdata/>
            </View>
    )
}

const Empdata=()=>{
    const name="John";
    const id="EMP001";
    const email="john@gmail.com"
    return(
        <View>
            <Text style={{
            fontSize: 15, 
            borderColor: "gray", 
            borderWidth:2, 
            height:25,
            backgroundColor: "coral",}}
            >Emp Name: {name}</Text>
            <Text style={{
            fontSize: 15, 
            borderColor: "gray", 
            borderWidth:2, 
            height:25,
            backgroundColor: "coral",}}
            >Emp Id: {id}</Text>
            <Text style={{
            fontSize: 15, 
            borderColor: "gray", 
            borderWidth:2, 
            height:25,
            backgroundColor: "coral",}}
            >Emp Email: {email}</Text>
        </View>
    )
}