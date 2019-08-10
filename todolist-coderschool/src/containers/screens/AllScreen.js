import React, { Component } from 'react'

import Icon from 'react-native-vector-icons/Feather'

import { TODOS } from '../../constants/index'

import { 
	StyleSheet, View, Text,
	Platform, StatusBar, SafeAreaView, TextInput, TouchableOpacity,
	ImageBackground, KeyboardAvoidingView
} from 'react-native'

import ImageBackgroundURL from '../../../assets/image-container.jpg'

import TodoItem from '../../components/TodoItem';
import { ScrollView } from 'react-native-gesture-handler';

let timer;

export default class AllScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			header: null,
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
		
		clearTimeout(timer)

		const todo = todoList.find(todo => todo.id === id);
		todo.status = todo.status === 'Done' ? 'Active' : 'Done';
		const foundIndex = todoList.findIndex(todo => todo.id === id);
		todoList[foundIndex] = todo;
		const newTodoList = [...todoList];


		timer = setTimeout(() => {
			navigation.navigate('SingleTodo', {
			  updatedTodo: todo
			});
		}, 10);
		
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
			<SafeAreaView style={{
				flex:1, 
				backgroundColor: 'transparent', 
				paddingTop: Platform.OS === 'android' 
					// ? StatusBar.currentHeight 
					? 0 : 0}}>
				<ImageBackground style={styles.imageContainer} source={ImageBackgroundURL}>
					<KeyboardAvoidingView
						enabled
						behavior="height"
						keyboardVerticalOffset={120}
					>
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
						<View style={styles.createContainer}>
							<TextInput
								value={todoBody}
								style={styles.todoInput}
								onChangeText={text => this.onChangeText(text)}
								/>
							<TouchableOpacity style={styles.button} onPress={this.onSubmitTodo}>
								<Text style={styles.buttonText}><Icon name="upload" size={20}/></Text>
							</TouchableOpacity>
						</View>
						</ScrollView>
					</KeyboardAvoidingView>
				</ImageBackground>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 0.4
	},
	todoInput: {
		width: '80%',
		color: 'black',
		borderWidth: 1,
		marginTop: '20%',
		marginBottom: '5%',
		borderColor: 'grey',
		borderRadius: 5,
		paddingVertical: 10,
		paddingHorizontal: 7,
		marginBottom: 70
	},
	createContainer: {
		borderColor: '#D9D9D9',
		borderWidth: 1,
		borderStyle: 'dashed',
		padding: 15,
		marginHorizontal: 0,
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row'
	},
	button: {
		height: 50,
		width: 60,
		borderRadius: 10,
		alignItems: 'center',
		backgroundColor: 'blue',
		justifyContent: 'center'
	},
	buttonText: {
		color: 'white',
		fontWeight: 'bold'
	},
	imageContainer: {
		flex: 1,
		resizeMode: 'cover'
	}
});
