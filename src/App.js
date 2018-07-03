import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import Header from './components/Header';
import TodoList from './components/TodoList';

const store = createStore(reducers);

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Header />
          <TodoList />
        </View>
      </Provider>
    );
  }
}

export default App;
