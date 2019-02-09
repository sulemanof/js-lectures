import React from 'react';
import { Route, Link } from 'react-router-dom';

const users = [
    { name: 'Sveta', title: 'Konfeta', path: 'sveta' },
    { name: 'Pasha', title: 'Carousel', path: 'pasha' },
    { name: 'Ira', title: 'Zemfira', path: 'ira' },
    { name: 'Andrei', title: 'Prosto horoshiy chelovek', path: 'andrei' },
    { name: 'Yahor', title: 'idi v svoi dvor', path: 'yahor' },
    { name: 'Artem', title: 'po licu loktem', path: 'artem' },
];

const User = ({ match }) => {
    let user = users.find(user => user.path === match.params.user);

    if (!user) {
        user = {
            name: 'danila',
            title: 'odin udar i ti mogila'
        }
    }

    return (
        <h1>{`${user.name} ${user.title}`}</h1>
    )
}
class Users extends React.Component {
    render() {
        const { match } = this.props;
        return (
            <div className='container'>
                <h1>Choose a user</h1>
                <nav className='nav navBar'>
                    {users.map(user => <Link className='nav-item nav-link' to={`${match.url}/${user.path}`}>{user.name}</Link>)}
                </nav>
                <Route path={`${match.url}/:user`} component={User} />
            </div>
        )
    }
}

export default Users;