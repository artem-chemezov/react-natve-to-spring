import React, { useState } from 'react';
import { View, Text,    StyleSheet, TouchableOpacity } from 'react-native';

import axios from 'axios';


const Dish = (props) => {

    const onReady = () => {
        // let orders = [[]]
        let orders = props.allOrders.filter(order => order.id != props.orderId)
        // orders.push({"id" : props.orderId, "dishes" : [undefined]})
        console.log(props.orderId + "++++" + orders)
        props.setGottenOrders(orders)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => onReady()}>
                <Text style={styles.dishTitle}>{props.dishName.slice(1,-1)}</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 10,
        padding: 18,
        minWidth: '20%'
    },

    dishTitle: {
        fontWeight: "bold",
        fontSize: 22
    }
});

export default Dish;