// class component or functional components

import { Component } from "react";
import { View, Text } from "react-native";

class Index extends Component {
    render() {
        return (
            <View style={{backgroundColor: "green"}}>
                <Text style={{fontSize: 40 }}>Hello, World!</Text>
            </View>
        );

    }   
}
export default Index;