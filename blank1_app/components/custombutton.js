import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react';

const Custombutton = () => {
  return (
    <View>
      <Text>custombutton</Text>
      <Button title="Click me" onPress={() => alert("Button Pressed")} />
    </View>
  )
}

export default Custombutton;

const styles = StyleSheet.create({});