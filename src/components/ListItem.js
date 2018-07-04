import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { updateTask, deleteTask, updateEditMode } from '../actions/ListActions';
import ListItemEdit from './ListItemEdit';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            editTaskValue: this.props.item.text
        };
    }

    onTaskChangeText(value) {
        this.setState({ editTaskValue: value });
    }

    onSave() {
        const index = this.props.orderNum;
        const newTaskText = this.state.editTaskValue;
        const taskList = this.props.taskList;

        this.props.updateTask(index, newTaskText, taskList);
        this.editModeOff();
        this.props.listUpdated();
    }

    onDelete() {
        const index = this.props.orderNum;
        const taskList = this.props.taskList;

        this.props.deleteTask(index, taskList);
        this.editModeOff();
        this.props.listUpdated();
    }

    editModeOff() {
        this.setState({ editMode: false });
        this.props.updateEditMode(false);
    }

    editModeOn() {
        this.setState({ editMode: true });
        this.props.updateEditMode(true);
    }

    renderItem() {
        if (this.state.editMode === true) {
            return (
                <ListItemEdit 
                    value={this.state.editTaskValue}
                    onChangeText={this.onTaskChangeText.bind(this)}
                    onDelete={this.onDelete.bind(this)}
                    onSave={this.onSave.bind(this)}
                />
            );
        }

        return (
            <View style={styles.containerStyle} >
                <Text style={styles.textStyle} >
                    {`${this.props.orderNum + 1}. `}
                </Text>
                <Text style={{ ...styles.textStyle, paddingRight: 50 }} >
                    {this.props.item.text}
                </Text>
                <TouchableOpacity 
                    style={styles.editStyle}
                    onPress={this.editModeOn.bind(this)}
                >
                    <Text style={{ color: 'rgba(100,100,100, 0.8)' }} >EDIT</Text>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        return (
            <View>
                {this.renderItem()}
            </View>
        );
    }
}

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
    editStyle: {
        width: 40, 
        height: '100%',
        position: 'absolute', 
        right: 0, 
        paddingTop: 12, 
    }
};

const mapStateToProps = (state) => {
    const { taskList } = state.list;

    return {
        taskList
    };
};

export default connect(mapStateToProps, { updateTask, deleteTask, updateEditMode })(ListItem);
