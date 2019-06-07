import React , { Component } from 'react';
import { connect } from 'react-redux';
import Switch from '@material-ui/core/Switch';
import { changeItemStatus, deleteItem, deleteCompleted } from '../store/actions';


class TodoList extends Component {

    itemStatusToggle =  item => () => {
		this.props.dispatch(changeItemStatus(item))
	  };

	  removeItem =  item => () => {
		this.props.dispatch(deleteItem(item))
	  };
	  removeComleted = () => {
		this.props.dispatch(deleteCompleted())
	  };
  
    render() {
		const new_list = this.props.items.filter(item => (
			(this.props.status === 0 || (this.props.status===1 && item.completed) || (this.props.status===2 && !item.completed)) ? item :null))
      return( 
        <ul className='items-list'>
			{new_list.map(item => (
						<li className='todo-item' key={item.id}>
							<div>
								<Switch onChange={this.itemStatusToggle(item)} checked={item.completed}/>
								{item.text}
								<button className='destroy' onClick={this.removeItem(item)}>x</button>
							</div>
						</li>
			))}
			<div className='info'>  
				Количество заданий в списке: {new_list.length}
				{new_list.find(item=>(item.completed)) ? <button onClick={this.removeComleted}>Очистить список выполненных</button> : null}
			</div>
        </ul>
      );
    }
  }

export  default connect(null)(TodoList)