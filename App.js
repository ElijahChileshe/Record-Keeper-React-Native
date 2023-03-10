import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

// Components
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodos from './components/AddTodos';


export default function App() {

  const [todos, setTodos] = useState([ 
    {text: 'Buy Coffee', key:'1'},
    {text: 'Drink Water', key:'2'},
    {text: 'Have Lunch', key:'3'}
  ])

const pressHandler = (key) => {
  setTodos((prevTodos) => {
    return prevTodos.filter(todo => todo.key != key)
  })
}

const submitHandler = (text) => {
  setTodos((prevTodos) => {
    return [
      {text: text, key: Math.random().toString()},
      ...prevTodos
    ]
  })
}

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />
      <View style={styles.content}>
        {/* to form */}
        <AddTodos submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList 
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler}/>
            )}
          />
        </View>
      </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});
