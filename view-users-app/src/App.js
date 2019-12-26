import React, { useEffect, useState, useCallback } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import { User } from './User';
import { Posts } from './Posts';

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      .then(setUsers)
      .catch(error => console.error(error));

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(data => data.json())
      .then(setPosts)
      .catch(error => console.error(error))
  }, [])

  const onClick = useCallback(() => {
    setLimit(limit => limit + 5)
  }, [])

  return (
    <div className="App">
      <Posts posts={posts} limit={limit} users={users}/>
      <Button variant="dark" onClick={onClick}>Show more</Button>
    </div>
  );
}

export default App;
