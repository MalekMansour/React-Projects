import { StyleSheet, Text, View, Image } from 'react-native'; 
import React from 'react';

const TextInputCustom = () => {
  return (
    <View style={styles.container}>  
      <Image
        style={{ width: 100, height: 100, borderRadius: 10 }}
        source={require("../assets/react.jpg")}/>
      <Text style={{color: "white", fontSize: 20,fontWeight: "bold", marginTop: 20}}>
        EVERY REACT NATIVE APP
        </Text> 
        <View style={styles.container1}>
        <View style={styles.view2}>
        <Text style={styles.text}>WE DID IT AGAIN</Text>
        </View>
        <View style={styles.view2}>
        <Text style={styles.text}>To</Text>
        </View>
        <View style={styles.view2}>
        <Text style={styles.text}>The</Text>
        </View>
        <View style={styles.view2}>
        <Text style={styles.text}>App</Text>
        </View>
        </View>
    </View>
  );
}

export default TextInputCustom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center"
  },
  container1: {
    marginTop: 20,
    marginBottom: 30,
    alignItems: "center",
  },
  view2:{
   backgroundColor: "white",
   color: "black",
   borderRadius: 60,
   paddingHorizontal: 10,
   paddingVertical: 20,
   marginBottom: 10,
   alignItems: "center",
  },
  text:{
    fontSize: 20,
    fontWeight: "bold",
    color: "green"
  }
});
