import React , { Component } from 'react';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';

class TodoList extends Component {

	itemStatusToggle =  item => () => {
		this.props.changeItemStatus(item)
	};

		removeItem =  item => () => {
		this.props.deleteItem(item)
	};
		removeComleted = () => {
		this.props.deleteCompleted()
	};

	render() {
		const { items, itemsCount, removeButton } = this.props;
		return( 
			<div>
				<ul className='items-list'>
					{ items.length>0 ? items.map(item => (
						<li className='todo-item' key={ item.id }>
							<div>
								<Switch onChange={this.itemStatusToggle(item)} checked={ item.completed }/>
								{ item.text }
								<button className='destroy' onClick={ this.removeItem(item) }>x</button>
							</div>
						</li>
					)): null}
				</ul>
				<div className='info'>
					<a className='text'>Количество заданий в списке: { itemsCount }</a>
					{removeButton ? <Button variant="contained" color="secondary" onClick={ this.removeComleted }>Очистить список выполненных </Button> : null}
				</div>
			</div>
		);
	}
};

export default TodoList