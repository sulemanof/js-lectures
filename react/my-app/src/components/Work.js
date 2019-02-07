import React from 'react';
import { Route, Link } from "react-router-dom";

const GoHome = () => <h1>It is better to go home</h1>;
const Work = ({match}) => {
  return (
    <>
      <h1>This page is responsible for work</h1>
      <Link className='btn' to={match.url + '/gohome'}>Start</Link>
      <Route
        path={match.url + '/gohome'}
        component={GoHome}
      />
  </>)
};

export default Work;