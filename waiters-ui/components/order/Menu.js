import React, { useState } from 'react';
import { View, ScrollView, Text,    StyleSheet, TouchableOpacity } from 'react-native';

import axios from 'axios';

import Dish from './Dish';

const Menu = (props) => {

    return (

            <ScrollView style={styles.scroll}>
                <Dish dishName='Блюдо 1' dishTime='999' onClick={props.addDish}/>
                <Dish dishName='Блюдо 2' dishTime='123' onClick={props.addDish}/>
                <Dish dishName='Блюдо 3' dishTime='456' onClick={props.addDish}/>
                <Dish dishName='Блюдо 4' dishTime='789' onClick={props.addDish}/>
                <Dish dishName='Блюдо 5' dishTime='111' onClick={props.addDish}/>
                <Dish dishName='Блюдо 6' dishTime='222' onClick={props.addDish}/>
                <Dish dishName='Блюдо 7' dishTime='333' onClick={props.addDish}/>
                <Dish dishName='Блюдо 8' dishTime='444' onClick={props.addDish}/>
                <Dish dishName='Блюдо 9' dishTime='555' onClick={props.addDish}/>
            </ScrollView>

    )
}

const styles = StyleSheet.create({
    scroll: {
        padding: 20,
        paddingTop: 10,
        backgroundColor: 'blue',
    }
});

export default Menu;