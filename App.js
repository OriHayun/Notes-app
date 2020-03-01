import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

import Header from './components/Header/header';
import InputBar from './components/inputBar/inputBar';
import TodoItem from './components/todoItem/todoItem';


export default class App extends Component {

  constructor() {
    super();

    this.state = {
      todoInput: '',
      todos: [
        { id: 0, title: 'Take out the trash', done: false },
        { id: 1, title: 'Cock dinner', done: false }
      ]
    }
  }

  addNewTodo = () => {
    let todos = this.state.todos;

    todos.unshift({
      id: todos.length + 1,
      title: this.state.todoInput,
      done: false
    })

    this.setState({
      todos,
      todoInput: ''
    })
  }

  toggleDone = (item) => {
    let todos = tnis.state.todos;

    todos = todos.map((todo) => {
      if (todo.id == item.id) {
        todo.done = !todo.done
      }
      return todo;
    })

    this.setState({
      todos
    });
  }

  removeTodo =(item) =>{
    let todos = this.state.todos;

    todos = todos.filter((todo) =>todo.id !== item.id)

    this.setState({todos})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusBar}></View>
        <Header
          title={"MY NOTES"}
        />
        <InputBar
          textChange={todoInput => this.setState({ todoInput })}
          addNewTodo={() => this.addNewTodo()}
        />

        <FlatList
          data={this.state.todos}
          extraData={this.state}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <TodoItem
                todoItem={item}
                toggleDone={() => this.toggleDone(item)}
                removeTodo={() => this.removeTodo(item)} />
            )
          }
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBar: {
    backgroundColor: '#FFCE00',
    height: 25
  }

});
