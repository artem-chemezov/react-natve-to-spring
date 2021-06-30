import React, { useState } from 'react';
import { View, Text,    StyleSheet, TouchableOpacity } from 'react-native';

import axios from 'axios';


const Clear = (props) => {



    const [ data, setData ] = useState([]);

    return (
        <View style={styles.container} >

            <TouchableOpacity style={styles.button} onPress={() => props.onClick([])}>
                <Text style={styles.buttonTitle}>CLEAR</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        // flexDirection: 'row',
        // flexWrap: 'wrap',
        // flex: 1,
                width: '40%',

    },

    buttonTitle: {
        fontWeight: "bold",
        fontSize: 22
    },

    button: {
        backgroundColor: 'red',
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    }
});

export default Clear;