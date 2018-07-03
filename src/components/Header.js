import React from 'react';
import { View, Text, StatusBar } from 'react-native';

const Header = () => {
    return (
        <View style={{ position: 'absolute', top: 0, height: 60, width: '100%', alignItems: 'center', justifyContent: 'flex-end' , backgroundColor: '#80CBC4' }} >
            <StatusBar
                barStyle="light-content"
            />
            <Text style={{ color: 'white', fontSize: 20, fontWeight: '600', marginBottom: 10 }}>
                To Do List
            </Text>
        </View>
    )
}

export default Header;
