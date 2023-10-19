import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
        center: {
            alignItems: 'center',
        },
});

const Greeting = props => {
    return (
    <View style={styles.center}>
    <Text>Hello {props.name}!</Text>
    </View>
    );
};

const LotsOfGreetings = () => {
    return (
        <View style={[styles.center, {top:50}]}>
        <Greeting name='Colin'/>
        <Greeting name='Andrew'/>
        <Greeting name='Duncan'/>
        <Greeting name='Betsey'/>
        </View>
    );
};

export default LotsOfGreetings;