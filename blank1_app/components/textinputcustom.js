import { StyleSheet, Text, View, Image } from 'react-native'; 
import React from 'react';

const TextInputCustom = () => {
  return (
    <View style={styles.container}>  
      <Text style={styles.text}>Search</Text> 
      <Image
        style={{ width: 100, height: 100, borderRadius: 10 }}
        source={require("../assets/search.png")}
      />
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
  text: {
    color: "white",  
    fontSize: 16,
  }
});
