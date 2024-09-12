import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

class Index extends Component {
    render() {
        return (
            <View style={{ flexDirection: "row", backgroundColor: "#542095", flex: 1 }}>
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

// Define styles
const styles = StyleSheet.create({
    button: {
        backgroundColor: "#FFFFFF", // Background color of the button
        borderColor: "#000000", // Border color
        borderWidth: 2, // Width of the border
        borderRadius: 5, // Rounded corners
        padding: 10, // Padding inside the button
        alignItems: 'center', // Center the text horizontally
    },
    buttonText: {
        color: "#000000", // Text color
        fontSize: 16, // Font size
    },
});

export default Index;
