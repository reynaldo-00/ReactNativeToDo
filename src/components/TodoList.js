import React, { Component } from 'react';
import { 
    View, 
    Text, 
    FlatList, 
    ScrollView, 
    // Animated, 
    // Keyboard, 
    KeyboardAvoidingView,
} from 'react-native';
import { connect } from 'react-redux';
import { updateList, clearList } from '../actions/ListActions';
import Header from './Header';
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

    componentWillMount() {
    }

    componentWillUnmount() {
    }

    clearList() {
        this.props.clearList();
        this.setState({ inputValue: '' });
    }

    addTask() {
        if (this.state.inputValue !== '') {
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
                        height: '100%', 
                        width: '100%',
                        justifyContent: 'center', 
                        alignItems: 'center',
                        top: 200,
                    }} 
                >
                    <Text style={{ color: 'gray' }} >List Empty</Text>
                </View>
            );
        }
        return (
            <FlatList
                style={{ width: '100%', height: '100%' }}
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
        const { containerStyle } = styles;
        return (
            <View style={{ ...containerStyle, }} >
                <Header onPress={this.clearList.bind(this)} />
                <ScrollView
                    style={{ width: '100%', height: '100%', }}
                >
                    {this.renderList()}
                </ScrollView>
                <KeyboardAvoidingView 
                    style={{ width: '100%', alignSelf: 'flex-start' }}
                    behavior="padding"
                    enabled
                >
                    <Input 
                        value={this.state.inputValue} 
                        onChangeText={this.updateInputText.bind(this)}
                        style={(this.props.editMode === false) ? {} : { height: 0 }}
                    />
                    <AddTask onPress={this.addTask.bind(this)} editMode={this.props.editMode} />
                </KeyboardAvoidingView>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        width: '100%', 
        height: '100%', 
        justifyContent: 'flex-start', 
        alignItems: 'center',
        paddingTop: 60,
        backgroundColor: 'black',
    },
    listStyle: {
        width: '80%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 3,
        borderWidth: 1,
        // borderColor: '#80CBC4',
        borderColor: '#80CBC4',
    },
};

const mapStateToProps = (state) => {
    const { taskList, editMode } = state.list;
    return {
        taskList,
        editMode,
    };
};

export default connect(mapStateToProps, { updateList, clearList })(TodoList);
