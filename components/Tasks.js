import React from "react";
import { View, Text, StyleSheet } from "react-native";

Task = (props) =>{
    return(
        <View style={styles.TaskContainer}>
            <View style={styles.leftSide}>
                <View style={styles.rectangle}>
                                        
                </View>
                <Text style={styles.text}>{props.item}</Text>
            </View>
            <View style={styles.circle}>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    TaskContainer: {
        backgroundColor: 'white',
        padding: 15,
        marginBottom: 20,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',

    },
    leftSide: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap : 'wrap',
        alignItems: 'center',
    },
    rectangle: {
        width: 24,
        height: 24,
        backgroundColor: 'grey',
        borderRadius: 5,
        marginRight: 15,
    },
    text: {
        maxWidth: '80%',
    },
    circle: {
        height: 12,
        width: 12,
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 5
    }
})

export default Task;