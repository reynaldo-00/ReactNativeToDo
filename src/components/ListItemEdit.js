import React from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';

const ListItemEdit = ({ value, onDelete, onSave, onChangeText }) => (
    <View
        style={styles.containerStyle}
    >
        <TextInput 
            style={styles.textStyle} 
            value={value}
            onChangeText={onChangeText}
            fontSize={18}
            maxLength={40}
        />
        <TouchableOpacity 
            style={styles.saveStyle}
            onPress={onSave}
        >
            <Text style={{ color: 'white', fontWeight: '800', fontSize: 18 }} >O</Text>
        </TouchableOpacity>
        <TouchableOpacity 
            style={styles.deleteStyle}
            onPress={onDelete}
        >
            <Text style={{ color: 'white', fontWeight: '800', fontSize: 18 }} >X</Text>
        </TouchableOpacity>
    </View>
);

const styles = {
    containerStyle: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#80CBC4',
        paddingLeft: 15,
    },
    textStyle: { 
        fontSize: 16, 
        fontWeight: '200',
        width: '100%',
        paddingRight: 110,
    },
    deleteStyle: {
        width: 50, 
        height: '100%',
        position: 'absolute', 
        right: 0,
        backgroundColor: '#e57373',
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
    },
    saveStyle: {
        width: 50, 
        height: '100%',
        position: 'absolute', 
        right: 50,
        backgroundColor: '#81C784',
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
    }
};

export default ListItemEdit;
