import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Footer = ({ onPress }) => (
        <TouchableOpacity
            onPress={onPress}
            style={{
                position: 'absolute',
                bottom: 0,
                height: 50, 
                justifyContent: 'center', 
                alignItems: 'center', 
                width: '100%',
                backgroundColor: '#80CBC4',
            }} 
        >
            <Text style={{ color: 'white', fontSize: 22, fontWeight: '500' }} >Clear List</Text>
        </TouchableOpacity >
);

export default Footer;
