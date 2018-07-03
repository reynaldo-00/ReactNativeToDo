import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const AddTask = ({ onPress }) => (
    <TouchableOpacity
        style={styles.containerStyle}
        onPress={onPress}
    >
        <Text 
            style={styles.textStyle} 
        >Add Task</Text>
    </TouchableOpacity>
);

const styles = {
    containerStyle: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#80CBC4',
        borderWidth: 1,
        borderColor: '#80CBC4',
        borderBottomRightRadius: 3,
        borderBottomLeftRadius: 3,
    },
    textStyle: { 
        color: 'white', 
        fontSize: 20, 
        fontWeight: '500',
    },
};

export default AddTask;
