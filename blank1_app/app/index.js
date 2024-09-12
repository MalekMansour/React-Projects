import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

class Index extends Component {
    render() {
        return (
            <View style={{ flexDirection: "row", backgroundColor: "#542095", flex: 1 }}>
                <Text style={{color: "#F1FFF9", marginTop: 300}}>Malek</Text>
                <View style={{ margin: 80, flex: 5, marginTop: 400 }}>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => alert("You tapped the button!")}
                    >
                        <Text style={styles.buttonText}>Press Me</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#FFFFF2", 
        borderColor: "#000000", 
        borderWidth: 2, 
        borderRadius: 5, 
        padding: 10, 
        alignItems: 'center', 
    },
    buttonText: {
        color: "#000000", 
        fontSize: 16, 
    },
});

export default Index;
