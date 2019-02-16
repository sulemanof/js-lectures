import React, { Component } from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import styled from 'styled-components';

const StyledItem = styled(ListGroup.Item)`
	text-align: center;

	.btn {
		margin: 0 2em;
	}
`

class TodoRaw extends Component {
	handleDelete = () => {
		const { deleteTodo, todo } = this.props;

		deleteTodo({ id: todo.id });
	}

	handleToggle = () => {
		const { toggleTodo, todo } = this.props;

		toggleTodo({ id: todo.id });
	}

	render() {
		const { done, text } = this.props.todo;

		return (
			<StyledItem className={done ? 'list-group-item-success' : null}>
				<p>{text}</p>
				<div className='todoRaw__control'>
					<Button
						variant={done ? "warning" : "success"}
						onClick={this.handleToggle}
					>{done ? 'Undo' : 'Mark done'}</Button>
					<Button
						variant="danger"
						onClick={this.handleDelete}
					>Delete</Button>
				</div>
			</StyledItem>
		);
	}
}

export default TodoRaw;