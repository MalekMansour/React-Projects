import { StyleSheet, Text, View, Image } from 'react-native'; 
import React from 'react';

const TextInputCustom = () => {
  return (
    <View style={styles.container}>  
      <Image
        style={{ width: 100, height: 100, borderRadius: 10 }}
        source={require("../assets/search.png")}/>
      <Text style={{color: "white", fontSize: 20,fontWeight: "bold", marginTop: 20}}>
        Search
        </Text> 
        <View style={styles.container1}>
        <Text style={styles.view2}>Welcome</Text>
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
   borderRadius: 20,
   paddingHorizontal: 10,
   paddingVertical: 20

  }
});
