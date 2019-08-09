import React, { Component } from 'react'

import Icon from 'react-native-vector-icons/Feather'

import { TODOS } from '../../constants/index'

import { 
	StyleSheet, View, Text,
	Platform, StatusBar, SafeAreaView, TextInput, TouchableOpacity
} from 'react-native'
import TodoItem from '../../components/TodoItem';
import { ScrollView } from 'react-native-gesture-handler';

export default class AllScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: 'All task',
			tabBarIcon: ({ tintColor }) => <Icon name="plus-circle" style={{color: tintColor, fontSize: 32 }} />,
		}
	}

	state = {
		todoList: TODOS,
		todoBody: ''
	}

	onDeleteTodo = id => {
		const { todoList } = this.state;

		const newTodoList = todoList.filter(todo => todo.id !== id);

		this.setState({
			todoList: newTodoList
		})
	};

	onToggleTodo = id => {
		const { todoList } = this.state;
		const { navigation } = this.props;

		const todo = todoList.find(todo => todo.id === id);
		todo.status = todo.status === 'Done' ? 'Active' : 'Done';
		const foundIndex = todoList.findIndex(todo => todo.id === id);
		todoList[foundIndex] = todo;
		const newTodoList = [...todoList];

		setTimeout(() => {
			navigation.navigate('SingleTodo', {
			  updatedTodo: todo
			});
		  }, 1000);
		
		this.setState({
			todoList: newTodoList
		})
	};

	onChangeText = (text) => {
		this.setState({
			todoBody: text
		})
	}

	onSubmitTodo = () => {
		const { todoBody, todoList } = this.state;

		const newTodo = {
		  body: todoBody,
		  status: 'Active',
		  id: todoList.length + 1
		};
		const newTodoList = [...todoList, newTodo];
		this.setState({
			todoList: newTodoList,
			todoBody: ''
		})
	  };

	render () {
		const { todoList, todoBody } = this.state;
		return (
				<SafeAreaView style={{flex:1, backgroundColor: '#fff', paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}>
					<ScrollView>
						<View style={styles.container}>
						{
							todoList.map((todo, idx) => {
								return <TodoItem 
									key={todo.body} 
									todo={todo}
									idx={idx}
									onToggleTodo={this.onToggleTodo}
									onDeleteTodo={this.onDeleteTodo}/>;
							})
						}
						</View>
					<View style={styles.inputContainer}>
						<TextInput
							value={todoBody}
							style={styles.todoInput}
							onChangeText={text => this.onChangeText(text)}
							/>
						<TouchableOpacity style={styles.button} onPress={this.onSubmitTodo}>
							<Text style={styles.buttonText}>Submit</Text>
						</TouchableOpacity>
					</View>
					</ScrollView>
				</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	todoInput: {
		width: '95%',
		minHeight: 30,
		color: 'black',
		borderWidth: 1,
		marginTop: '20%',
		marginBottom: '5%',
		borderColor: 'grey',
		borderRadius: 5,
		padding: 10
	},
	inputContainer: {
		width: '90%',
		marginTop: 0,
		padding: 40,
		marginBottom: '10%',
		alignItems: 'center',
		justifyContent: 'center'
	},
	button: {
		height: 50,
		width: '50%',
		borderRadius: 10,
		alignItems: 'center',
		backgroundColor: 'blue',
		justifyContent: 'center'
	},
	buttonText: {
		color: 'white',
		fontWeight: 'bold'
	}
});
