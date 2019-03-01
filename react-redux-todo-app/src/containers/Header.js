import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { showAll, showActive, showDone } from '../state-management/actions';
import LoadingBar from '../components/LoadingBar';
import countDone from '../helpers/countDoneTodos';

const StyledNav = styled(Nav)`
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	justify-content: space-evenly;
`;


const Header = ({ showAll, showActive, showDone, todos }) => {
	const routes = [
		{ to: '/', text: 'All', action: showAll },
		{ to: '/active', text: 'Active', action: showActive },
		{ to: '/done', text: 'Done', action: showDone }
	];

	return (
		<>
			<LoadingBar all={todos.length} done={countDone(todos)}/>
			<StyledNav>
				{routes.map(({ to, text, action }) => <Link key={text} to={to} className="nav-link" onClick={action}>{text}</Link>)}
			</StyledNav>
		</>
	)
};

const mapStateToProps = ({ todos }) => ({
	todos
});

export default connect(mapStateToProps, { showAll, showActive, showDone })(Header);