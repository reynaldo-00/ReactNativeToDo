import React from 'react';
import { View, Text, StatusBar } from 'react-native';

const Header = () => (
    <View 
        style={styles.containerStyle} 
    >
        <StatusBar
            barStyle="light-content"
        />
        <Text style={styles.textStyle}>
            To Do List
        </Text>
    </View>
);

const styles = {
    containerStyle: {
        position: 'absolute', 
        top: 0, 
        height: 60, 
        width: '100%', 
        alignItems: 'center', 
        justifyContent: 'flex-end', 
        backgroundColor: '#80CBC4',
    },
    textStyle: { 
        color: 'white', 
        fontSize: 20, 
        fontWeight: '600',
        marginBottom: 10,
    },
};


export default Header;
