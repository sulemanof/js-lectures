import React from 'react';
import { VISIBILITY_FILTERS } from '../state-management/constants';
import styled from 'styled-components';

const Message = styled.span`
	text-align: center;
	font-size: 2em;
	color: ${props =>
		props.visibilityFilter === VISIBILITY_FILTERS.SHOW_DONE ?
		'red' :
		'green'
	}
`;

const StyledMessage = ({visibilityFilter}) =>(
	<Message visibilityFilter={visibilityFilter}>
		{visibilityFilter === VISIBILITY_FILTERS.SHOW_DONE ?
		'You haven\'t done anything yet' :
		'Keep calm. There are no todos for today'}
	</Message>
);

export default StyledMessage;