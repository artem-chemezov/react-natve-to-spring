import React, { useState } from 'react';
import { View, Text,    StyleSheet, TouchableOpacity } from 'react-native';

import axios from 'axios';


const Send = (props) => {



    const [ data, setData ] = useState([]);

    const sendOrder = () => {

        alert(JSON.stringify({"order": props.order}))

        axios.post('http://192.168.31.53:8082/waiter', props.order)
        // axios.post('http://172.20.10.2:8082/waiter', props.order)
            .then((response) => alert("sended: \n" + props.order))
            .catch((error) => console.error(error))
            .finally(() => props.clear([]))
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => sendOrder()}>
                <Text style={styles.buttonTitle}>SEND</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '40%',
    },

    buttonTitle: {
        fontWeight: "bold",
        fontSize: 22
    },

    button: {
        backgroundColor: '#68de93',
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",

    }
});

export default Send;