import React, { Component } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import Footer from './Footer';

class TodoList extends Component {

    constructor() {
        super();
        this.state = {
            taskArray: [],
            inputValue: '',
        }
    }

    clearList() {
        this.setState({taskArray: [], inputValue: ''})
    }

    addTask() {
        if (this.state.inputValue !== '' && this.state.taskArray.length < 10) {
            const taskArray = this.state.taskArray;
            const count = taskArray.length + 1;

            taskArray.push({text: this.state.inputValue, count});
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
                renderItem={({ item }) => {
                    return (
                        <View
                            style={{
                                height: 45,
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                width: '100%',
                                borderBottomWidth: 1,
                                borderBottomColor: '#80CBC4',
                                paddingLeft: 15,
                                paddingRight: 15,
                            }}
                        >
                            <Text style={{fontSize: 16, fontWeight: '200'}} >
                                {`${item.count}. `}
                            </Text>
                            <Text style={{fontSize: 16, fontWeight: '200'}} >
                                {item.text}
                            </Text>
                        </View>
                    );
                }}
                keyExtractor={item => `${item.count}`}
            />
        );
    }

    render() {
        return (
            <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <View
                    style={{
                        width: '80%',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        borderRadius: 3,
                        borderWidth: 1,
                        borderColor: '#80CBC4',
                    }}
                >
                    {this.renderList()}
                    <View
                        style={{
                            height: 40,
                            width: '100%',
                            justifyContent: 'center',
                            borderTopWidth: 1,
                            borderColor: '#80CBC4',
                            paddingLeft: 15,
                            paddingRight: 15,
                        }}
                    >
                        <TextInput
                            value={this.state.inputValue}
                            onChangeText={this.updateInputText.bind(this)}
                            placeholder={'Task'}
                            fontSize={18}
                            maxLength={40}
                        />
                    </View>
                    <TouchableOpacity
                        style={{
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                            backgroundColor: '#80CBC4',
                            borderWidth: 1,
                            borderColor: '#80CBC4',
                            borderBottomRightRadius: 3,
                            borderBottomLeftRadius: 3,
                        }}
                        onPress={this.addTask.bind(this)}
                    >
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: '500' }} >Add Task</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{color: 'rgba(100,100,100, 0.8)', fontSize: 14, fontWeight: '200'}} >CharecterLimit:40 MaxTask:10 </Text>
                <Footer onPress={this.clearList.bind(this)}/>
            </View>
        );
    }
}

export default TodoList;
