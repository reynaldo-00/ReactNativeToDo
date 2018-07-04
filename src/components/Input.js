import React from 'react';
import { View, TextInput } from 'react-native';

const Input = ({ onChangeText, value, style }) => (
    <View
        style={{ ...styles.containerStyle, ...style }}
    >
        <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={'Task'}
            fontSize={18}
            maxLength={40}
        />
    </View>
);

const styles = {
    containerStyle: {
        height: 40,
        width: '100%',
        justifyContent: 'space-around',
        paddingLeft: 15,
        paddingRight: 15,
    }
};

export default Input;
