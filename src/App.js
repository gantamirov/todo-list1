import React , { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import TodoList from './components/todo-list.js';
import { changeFilter, addItem }from './store/actions';

import Input from '@material-ui/core/Input';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class App extends Component {

    state = { 
        text: '',
    };

  render() {
    return (
        <div className='todo-main'>
            <h3>Список дел: {this.props.items.length}(выполненных:{this.props.items.filter(i=>(i.completed ? i :null )).length}) </h3>
            <AppBar position="static">
            <Tabs value={this.props.status} onChange={this.statusChange}>
                <Tab label="Все" />
                <Tab label="Это я сделяль" />
                <Tab label="Это я не сделяль" />
            </Tabs>
            </AppBar>
        
        <form className='todo-controls' onSubmit={this.handleSubmit}> 
          <Input placeholder = 'Дай Дай Дай мне задание ;)'
            id="new-todo"
            onChange={this.inputChange}
            value={this.state.text}
          />
        </form>
        
        <TodoList items={ this.props.items } status={ this.props.status } />
      </div>
    );
  };

    inputChange = (e) => {
        this.setState({ text: e.target.value });
  };

    statusChange = (e, status) => {
        this.props.dispatch(changeFilter(status))
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
        this.props.dispatch(addItem(newItem))
        this.setState({text: ''})
  };
}

const mapStateToProps = (state) =>({
    items: state.items,
    status: state.status
})
export default connect(mapStateToProps)(App)
