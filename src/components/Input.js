import React from 'react';
import { View, TextInput } from 'react-native';

const Input = ({ onChangeText, value, style }) => (
    <View
        style={{ ...styles.containerStyle, ...style }}
    >
        <TextInput
            value={value}
            style={{ color: 'white' }}
            onChangeText={onChangeText}
            placeholder={'Task'}
            fontSize={18}
            maxLength={40}
        />
    </View>
);

const styles = {
    containerStyle: {
        // position: 'absolute',
        // bottom: 40,
        height: 40,
        width: '100%',
        justifyContent: 'space-around',
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: 'black',
        borderTopWidth: 1,
        // borderTopColor: 'rgb(150,150,150)',
        borderTopColor: 'white',
    }
};

export default Input;
