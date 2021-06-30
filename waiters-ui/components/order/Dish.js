import React, { useState } from 'react';
import { View, Text,    StyleSheet, TouchableOpacity } from 'react-native';

import axios from 'axios';


const Dish = (props) => {

    const [ chosen, setChosen ] = useState(false);

    const onChoose = () => {
        setChosen(!chosen)
        if (!chosen)
            props.onClick([props.dishName])
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: chosen ? 'green' : '#fff',
            borderWidth: 1,
            borderRadius: 20,
            marginTop: 10,
            padding: 18,
        },

        dishTitle: {
            fontWeight: "bold",
            fontSize: 22
        }
    })

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => onChoose()}>
                <Text style={styles.dishTitle}>{props.dishName}</Text>
                <Text>Время: {props.dishTime}</Text>
            </TouchableOpacity>
        </View>

    )
}


export default Dish;