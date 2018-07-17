import React from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';

const Header = ({ onPress }) => (
    <View 
        style={styles.containerStyle} 
    >
        <StatusBar
            barStyle="light-content"
        />
        <Text style={styles.textStyle}>
            To Do List
        </Text>
        <TouchableOpacity
            style={{ position: 'absolute', alignSelf: 'flex-end', }}
            onPress={onPress}
        >
            <Text 
                style={styles.clearTextStyle} 
            >Clear List</Text>
        </TouchableOpacity>
        
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
        backgroundColor: 'black',
        // backgroundColor: '#80CBC4',
    },
    textStyle: { 
        color: 'white', 
        fontSize: 20, 
        fontWeight: '600',
        marginBottom: 10,
    },
    clearTextStyle: {
        color: 'red', 
        fontSize: 18, 
        marginBottom: 10, 
        marginRight: 10
    }
};


export default Header;
