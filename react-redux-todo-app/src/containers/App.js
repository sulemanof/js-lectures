import React from 'react';
import { connect } from 'react-redux';
import BasicForm from '../components/BasicForm';
import Header from './Header';
import Todos from './Todos';
import { addTodo } from '../state-management/actions'

const App = ({ addTodo }) => (
  <>
    <Header />
    <BasicForm onSubmit={addTodo}/>
    <Todos />
  </>
);

export default connect(null, { addTodo })(App);
