import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { StyleSheet, Text, View, Alert } from 'react-native'
import { TODOS } from '../constants'

const TodoItem = ({
  todo, idx, onToggleTodo, onDeleteTodo
}) => {
  const statusStyle = {
    borderColor: todo.status === 'Done' ? 'blue' : 'green',
    borderWidth: 2,
  }

  const onLongPress = todo => {
		const prompt = `"${todo.body}"`;
		Alert.alert(
        'Delete your todo?',
        prompt,
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel'
          },
          { text: 'OK', onPress: () => onDeleteTodo(todo.id) }
        ],
        { cancelable: true }
      );
	  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        key={todo.body}
        delayLongPress={1100}
        style={[styles.todoItem, statusStyle]}
        onPress={() => onToggleTodo(todo.id)}
        onLongPress={() => onLongPress(todo)}
      >
          <Text style={styles.todoText}>
            {idx + 1}: {todo.body}
          </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center'
  },
	todoItem: {
    marginHorizontal: 15,
    marginVertical: 5,
    padding: 10,
		minHeight: 30,
		color: 'white',
		borderRadius: 5,
    flexWrap: 'wrap',
	},
	todoText: {
		fontSize: 15,
		color: 'black',
		fontWeight: 'bold'
	}
})

export default TodoItem
