//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Title from './Title'
import Subtitle from './Subtitle'

// create a component
const BlockCard = ({style}) => {
    return (
        <View style={[styles.container, style]}>
            <Image source={require('../assets/Logo_RSA_PNG_asli.png')} style={styles.image} />
            <View style={styles.contentContainer}> 
                <Title>Some Title</Title>
                <Subtitle>Some description</Subtitle>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 300,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#fff'
    },
    image: {
        width: "100%",
        height: 200
    },
    contentContainer: {
       padding: 5 
    }
});

//make this component available to the app
export default BlockCard;
