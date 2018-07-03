import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Footer = ({ onPress }) => (
        <TouchableOpacity onPress={onPress} style={styles.containerStyle} >
            <Text style={styles.textStyle} >Clear List</Text>
        </TouchableOpacity >
);

const styles = {
    containerStyle: {
        position: 'absolute',
        bottom: 0,
        height: 50, 
        justifyContent: 'center', 
        alignItems: 'center', 
        width: '100%',
        backgroundColor: '#80CBC4',
    },
    textStyle: { 
        color: 'white', 
        fontSize: 22, 
        fontWeight: '500',
    },
};

export default Footer;
