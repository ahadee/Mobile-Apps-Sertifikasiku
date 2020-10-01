//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BlockCard from './BlockCard';

// create a component
const WrappedCard = () => {
    return (
        <BlockCard style={{marginVertical: 15,}}/>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {},
});

//make this component available to the app
export default WrappedCard;
