import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Header />
        <TodoList />
      </View>
    );
  }
}

export default App;
