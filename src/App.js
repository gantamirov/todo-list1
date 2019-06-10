import React , { Component } from 'react';
import './App.css';
import TodoList from './containers/todo-list-container';
import Input from '@material-ui/core/Input';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class App extends Component {

	state = { 
		text: '',
	};

	inputChange = (e) => {
		this.setState({ text: e.target.value });
	};

	filterChange = (e, filter) => {
		this.props.changeFilter(filter)
	};

	handleSubmit = (e) => {
		e.preventDefault();
		if (!this.state.text.length) {
			return;
		}
		const newItem = {
			text: this.state.text,
			id: Date.now(),
			completed: false
		};
		this.props.addItem(newItem)
		this.setState({text: ''})
	};

	render() {
		const { items, filter } = this.props;
		return (
			<div className='todo-main'>
				<h3>Список дел: { items.length }(выполненных:{ items.filter(item => (item.completed)).length }) </h3>
				<AppBar position="static">
					<Tabs value={ filter } onChange={ this.filterChange }>
						<Tab label="Все" />
						<Tab label="Это я сделяль" />
						<Tab label="Это я не сделяль" />
					</Tabs>
				</AppBar>
			
				<form className='todo-controls' onSubmit={ this.handleSubmit }> 
					<Input placeholder='Дай Дай Дай мне задание ;)'
						id="new-todo"
						onChange={ this.inputChange }
						value={ this.state.text }
					/>
				</form>
				
				<TodoList items={ items } filter={ filter } />
			</div>
		);
	};
}

export default App
