import React, { useState, useEffect } from 'react';
import { View, Alert, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

import axios from 'axios';

import Order from './order/Order';

const OrdersDashboard = (props) => {

    const [ gottenOrders, setGottenOrders ] = useState([]);

    const sendReq = () => {
            console.log("---currentOtders: " + gottenOrders)

            // axios.get('http://172.20.10.2:8082/cook')
            axios.get('http://192.168.31.53:8082/cook')
                .then((response) => response.data)
                .then((json) => {
                    // console.log("gotten: content" + json.content + " - id: " + json.id)
                    var orders = gottenOrders;
                    var id = json.id;
                    var order = {"id" : id, "dishes" : json.content}

                    if (!gottenOrders.some(e => e.id == id)) {
                        orders.push(order);
                    }

                    setGottenOrders(Array.from(orders));
                })
                // .then((error) => console.log(gottenOrders))
                .catch((error) => console.error(error));

    }

    useEffect(() => {
        const interval = setInterval(() => sendReq(), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);


    return (

        <View style={styles.container}>
            {
                gottenOrders.map((order) => {
                    // console.log("orders: " +  gottenOrders[0].id + " = " + gottenOrders[0].dishes)
                    return (
                        <View>
                            {order.dishes[0] != undefined && <Order id={order.id} order={order.dishes} setGottenOrders={setGottenOrders} allOrders={gottenOrders} />}
                        </View>
                    );
                })
            }
        </View>


    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        flexWrap: 'wrap',
        // justifyContent: "center",
    }
});

export default OrdersDashboard;