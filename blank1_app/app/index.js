// class component or functional components

import { Component } from "react";
import { View, Text, Button } from "react-native";

class Index extends Component {
    render() {
        return (
            <View style={{flexDirection: "row", backgroundColor: "#542095", flex:1}}>
                <View style={{margin: 80, flex:5, marginTop: 400}}>
                <Button
                    title = "Press Me"
                    color="#000000"
                    onPress={() => alert("You tapped the button!")}
                ></Button>
                </View>
            </View>
            
            
        );

    }   
}
export default Index;