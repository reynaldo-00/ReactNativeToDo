import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const AddTask = ({ onPress, editMode }) => (
    <TouchableOpacity
        style={(editMode === false) ? styles.containerStyle : { height: 0 }}
        onPress={onPress}
    >
        <Text 
            style={styles.textStyle} 
        >Add Task</Text>
    </TouchableOpacity>
);

const styles = {
    containerStyle: {
        // position: 'absolute',
        // bottom: 0,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'rgb(50,50,50)',
        // backgroundColor: '#80CBC4',
        borderWidth: 1,
        // borderColor: '#80CBC4',
        borderColor: 'rgb(50,50,50)',
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
