import React, { Component } from "react";
import { View, Text, TouchableOpacity, TextInput, FlatList, StyleSheet } from "react-native";

class Index extends Component {
    state = {
        notes: [],
        newNote: ''
    };

    addNote = () => {
        if (this.state.newNote.trim() !== '') {
            this.setState(prevState => ({
                notes: [...prevState.notes, prevState.newNote],
                newNote: ''
            }));
        }
    };

    removeNote = (index) => {
        this.setState(prevState => {
            const notes = [...prevState.notes];
            notes.splice(index, 1);
            return { notes };
        });
    };

    render() {
        return (
            <View style={{ flex: 1, padding: 20, backgroundColor: "#588095" }}>
                <Text style={{ color: "#F1FFF9", fontSize: 24, marginBottom: 20 }}>Notes</Text>
                
                <TextInput
                    style={styles.input}
                    placeholder="Add a new note"
                    placeholderTextColor="#F1FFF9"
                    value={this.state.newNote}
                    onChangeText={text => this.setState({ newNote: text })}
                />
                
                <TouchableOpacity 
                    style={styles.button}
                    onPress={this.addNote}
                >
                    <Text style={styles.buttonText}>Add Note</Text>
                </TouchableOpacity>

                <FlatList
                    data={this.state.notes}
                    renderItem={({ item, index }) => (
                        <View style={styles.noteContainer}>
                            <Text style={styles.noteText}>{item}</Text>
                            <TouchableOpacity onPress={() => this.removeNote(index)}>
                                <Text style={styles.removeText}>Remove</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    style={{ marginTop: 20 }}
                />
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
    input: {
        height: 40,
        borderColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        color: '#FFFFFF',
        marginBottom: 10,
    },
    noteContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F1FFF9',
        padding: 10,
        borderRadius: 5,
        marginBottom: 5,
    },
    noteText: {
        color: '#000',
        fontSize: 16,
    },
    removeText: {
        color: 'red',
        fontWeight: 'bold',
    },
});

export default Index;
