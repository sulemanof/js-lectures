import React from 'react';
import styled from 'styled-components';

const Loader = styled.div`
    width: 100%;
    height: 50px;
    border: 2px solid black;
    margin: 5px;
    box-sizing: content-box;
`;

const Loading = styled.div`
    height: 50px;
    background-color: aquamarine;
    width: ${({ done, all }) => done/all * 100}%
`;

const LoadingBar = props => (
    <Loader>
        <Loading  {...props}/>
    </Loader>
)

export default LoadingBar;