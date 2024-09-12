// class component or functional components

import { Component } from "react";
import { View, Text } from "react-native";

class Index extends Component {
    render() {
        return (
            <View style={{flexDirection: "row", backgroundColor: "red", flex:1}}>
                <Text style={{fontSize: 40 }}>Hello, World!</Text>
              <View style={{backgroundColor: "green", flex: 2}}>
                <Text style={{fontSize: 40 }}>Hello, World!</Text>
              </View>
              <View style={{backgroundColor: "grey", flex: 3}}>
                <Text style={{fontSize: 40 }}>Hello, World!</Text>
              </View>
            </View>
            
            
        );

    }   
}
export default Index;