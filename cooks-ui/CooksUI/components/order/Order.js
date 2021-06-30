import React, { useState } from 'react';
import { View, ScrollView, Text,    StyleSheet, TouchableOpacity } from 'react-native';

import axios from 'axios';

import Dish from './Dish';

const Order = (props) => {

    return (

            <ScrollView style={styles.scroll}>
                <Text style={styles.id}>{props.id}</Text>
                {
                    props.order.map((dish) => {
                        return (<Dish orderId={props.id} dishName={dish} setGottenOrders={props.setGottenOrders} allOrders={props.allOrders}/>);
                    })
                }
            </ScrollView>

    )
}

const styles = StyleSheet.create({
    scroll: {
        padding: 20,
        paddingTop: 10,
        backgroundColor: 'green',
        borderRadius: 10,
        borderWidth: 1,
        margin: 15,
    },

    id: {
        textAlign: 'center',
        padding: 20,
        fontSize: 20,
        color: 'white'
    }
});

export default Order;