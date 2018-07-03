import React from 'react';
import { View, Text } from 'react-native';

const ListItem = ({ item }) => (
    <View
        style={styles.containerStyle}
    >
        <Text style={styles.textStyle} >
            {`${item.count}. `}
        </Text>
        <Text style={styles.textStyle} >
            {item.text}
        </Text>
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
        paddingRight: 15,
    },
    textStyle: { 
        fontSize: 16, 
        fontWeight: '200',
    },
};

export default ListItem;
