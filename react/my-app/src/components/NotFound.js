import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import PageNotFound from '../assets/404.png';

class NotFound extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
        setTimeout(() => this.setState({ redirect: true }), 5000)
    }

    render() {
        return this.state.redirect ? <Redirect to='/'/> :(
            <div>
                <img className='notFound' src={PageNotFound} alt='Page not found' />
                <center><Link to="/">Return to Home Page</Link></center>
            </div>
        )
    }
}

export default NotFound;