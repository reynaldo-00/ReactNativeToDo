import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { updateList, clearList } from '../actions/ListActions';
import Footer from './Footer';
import Input from './Input';
import AddTask from './AddTask';
import ListItem from './ListItem';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: '',
        };
    }

    clearList() {
        this.props.clearList();
        this.setState({ inputValue: '' });
    }

    addTask() {
        if (this.state.inputValue !== '' && this.props.taskList.length < 10) {
            const taskArray = this.props.taskList;
            const count = taskArray.length + 1;

            taskArray.push({ text: this.state.inputValue, count });
            this.props.updateList(taskArray);
            this.setState({ inputValue: '' });
        }
        console.log(this.props);
    }

    updateInputText(inputValue) {
        this.setState({ inputValue });
    }

    renderList() {
        if (this.props.taskList.length === 0) {
            return (
                <View style={{ height: 40, justifyContent: 'center', alignItems: 'center' }} >
                    <Text style={{ color: 'gray' }} >List Empty</Text>
                </View>
            );
        }
        return (
            <FlatList
                style={{ width: '100%' }}
                data={this.props.taskList}
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
                <Footer onPress={this.props.clearList.bind(this)} />
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

const mapStateToProps = (state) => {
    const { taskList } = state.list;
    return {
        taskList,
    };
};

export default connect(mapStateToProps, { updateList, clearList })(TodoList);
