import React from 'react';
import { View, TextInput } from 'react-native';

const Input = ({ onChangeText, value }) => (
    <View
        style={styles.containerStyle}
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
        justifyContent: 'center',
        borderTopWidth: 1,
        borderColor: '#80CBC4',
        paddingLeft: 15,
        paddingRight: 15,
    }
};

export default Input;
