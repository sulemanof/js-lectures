import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { showAll, showActive, showDone } from '../state-management/actions';

const StyledNav = styled(Nav)`
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	justify-content: space-evenly;
`;

const Header = ({ showAll, showActive, showDone }) => {
	const routes = [
		{ to: '/', text: 'All', action: showAll },
		{ to: '/active', text: 'Active', action: showActive },
		{ to: '/done', text: 'Done', action: showDone }
	];

	return (
		<StyledNav>
			{routes.map(({ to, text, action }) => <Link key={text} to={to} className="nav-link" onClick={action}>{text}</Link>)}
		</StyledNav>
	)
};


export default connect(null, { showAll, showActive, showDone })(Header);