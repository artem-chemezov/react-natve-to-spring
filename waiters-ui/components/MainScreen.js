import React, { useState } from 'react';
import { View, Alert, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

import axios from 'axios';

import Menu from './order/Menu';
import Send from './button/Send';
import Clear from './button/Clear';


const MainScreen = (props) => {

    const [ dishes, setDishes ] = useState([]);

    const addDish = (dish) => {
        var res = dishes
        res.push(dish)
        setDishes(Array.from(res))
    }

    return (
        <View>
            <View style={styles.menu} >
                <Menu addDish={addDish}/>
            </View>
            <View style={styles.buttons} >
                <Send order={dishes} clear={setDishes}/>
                <Clear onClick={setDishes}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    menu: {
        height: '92%',
    },
    buttons: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "center",
    }
    
});

export default MainScreen;