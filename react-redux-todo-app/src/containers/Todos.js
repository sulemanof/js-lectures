import React from 'react';
import { connect } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import styled from 'styled-components';
import TodoRaw from '../components/TodoRaw';
import Message from '../components/Message';
import { deleteTodo, toggleTodo } from '../state-management/actions';
import filterTodos from '../helpers/filterTodos';

const StyledListGroup = styled(ListGroup)`
	margin-top: 2em;
`;

const Todos = ({ todos, deleteTodo, toggleTodo, visibilityFilter }) => (
	<StyledListGroup>
		{todos.length ? todos.map((todo) =>
			<TodoRaw
				key={todo.id}
				todo={todo}
				deleteTodo={deleteTodo}
				toggleTodo={toggleTodo}/>) :
			<Message visibilityFilter={visibilityFilter}/>}
	</StyledListGroup>
);

const mapState = ({ todos, visibilityFilter }) => ({
	todos: filterTodos(todos, visibilityFilter),
	visibilityFilter
});

export default connect(mapState, { deleteTodo, toggleTodo })(Todos)