import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import Footer from './Footer';
import Input from './Input';
import AddTask from './AddTask';
import ListItem from './ListItem';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            taskArray: [],
            inputValue: '',
        };
    }

    clearList() {
        this.setState({ taskArray: [], inputValue: '' });
    }

    addTask() {
        if (this.state.inputValue !== '' && this.state.taskArray.length < 10) {
            const taskArray = this.state.taskArray;
            const count = taskArray.length + 1;

            taskArray.push({ text: this.state.inputValue, count });
            this.setState({ taskArray, inputValue: '' });
        }
        console.log(this.state);
    }

    updateInputText(inputValue) {
        this.setState({ inputValue });
    }

    renderList() {
        if (this.state.taskArray.length === 0) {
            return (
                <View style={{ height: 40, justifyContent: 'center', alignItems: 'center' }} >
                    <Text style={{ color: 'gray' }} >List Empty</Text>
                </View>
            );
        }
        return (
            <FlatList
                style={{ width: '100%' }}
                data={this.state.taskArray}
                extraData={this.state}
                renderItem={({ item }) => (
                        <ListItem item={item} />
                    )
                }
                keyExtractor={item => `${item.count}`}
            />
        );
    }

    render() {
        const { containerStyle, listStyle, warningStyle } = styles;
        return (
            <View style={containerStyle} >
                <View style={listStyle} >
                    {this.renderList()}
                    <Input 
                        value={this.state.inputValue} 
                        onChangeText={this.updateInputText.bind(this)} 
                    />
                    <AddTask onPress={this.addTask.bind(this)} />
                </View>
                <Text style={warningStyle}>CharecterLimit:40 MaxTask:10</Text>
                <Footer onPress={this.clearList.bind(this)} />
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        width: '100%', 
        height: '100%', 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    listStyle: {
        width: '80%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#80CBC4',
    },
    warningStyle: {
        color: 'rgba(100,100,100, 0.8)', 
        fontSize: 14, 
        fontWeight: '200',
    }
};

export default TodoList;
