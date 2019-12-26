import React from 'react';
import { CardDeck } from 'react-bootstrap';
import { Post } from './Post';

export function Posts({ posts, limit, users }) {
  return (
    <CardDeck>
      {posts.slice(0, limit).map(post => (<Post key={post.id} {...post} users={users} />))}
    </CardDeck>
  );
}
