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
            const count = (Math.random() * 100) + 1;

            taskArray.push({ text: this.state.inputValue, count });
            this.props.updateList(taskArray);
            this.setState({ inputValue: '' });
        }
    }

    updateInputText(inputValue) {
        this.setState({ inputValue });
    }

    updateList() {
        this.setState(this.state);
    }

    renderList() {
        if (this.props.taskList.length === 0) {
            return (
                <View 
                    style={{ 
                        height: 40, 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        borderBottomWidth: 1,
                        borderColor: '#80CBC4',
                        width: '100%',
                    }} 
                >
                    <Text style={{ color: 'gray' }} >List Empty</Text>
                </View>
            );
        }
        return (
            <FlatList
                style={{ width: '100%' }}
                data={this.props.taskList}
                extraData={this.state}
                renderItem={({ item }) => {
                    const itemOrder = this.props.taskList.indexOf(item);
                    return (
                        <ListItem 
                            item={item} 
                            orderNum={itemOrder} 
                            listUpdated={this.updateList.bind(this)} 
                        />
                    );
                }}
                keyExtractor={item => `${item.count}${item.text}`}
            />
        );
    }

    render() {
        const { containerStyle, listStyle, warningStyle } = styles;
        return (
            <View style={containerStyle} >
                <View 
                    style={
                        (this.props.editMode === false) 
                            ? { ...listStyle } 
                                : { ...listStyle, borderBottomWidth: 0 }
                    } 
                >
                    {this.renderList()}
                    <Input 
                        value={this.state.inputValue} 
                        onChangeText={this.updateInputText.bind(this)}
                        style={(this.props.editMode === false) ? {} : { height: 0 }}
                    />
                    <AddTask onPress={this.addTask.bind(this)} editMode={this.props.editMode} />
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
    const { taskList, editMode } = state.list;
    return {
        taskList,
        editMode,
    };
};

export default connect(mapStateToProps, { updateList, clearList })(TodoList);
