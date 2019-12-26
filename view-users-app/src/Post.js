import React, { useMemo, useCallback, useState } from 'react';
import { Card, Modal, Button } from 'react-bootstrap';

export function Post({ userId, id, title, body, users }) {
  const [showModal, setShowModal] = useState(false);
  const user = useMemo(() => users.find(user => user.id === userId), [users, userId]);
  const onClick = useCallback(() => {
    setShowModal(val => !val)
  }, [])

return (
  <>
    <Card className="post">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
      </Card.Body>
      <Card.Footer onClick={onClick}>
        {'Author: '}
        <Card.Link href="#">{user.name}</Card.Link>
      </Card.Footer>
    </Card>

    <Modal show={showModal} onHide={onClick}>
      <Modal.Header closeButton>
        <Modal.Title>{user.name}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Address: {`${user.address.city}, ${user.address.street}, ${user.address.suite}`}</p>
        <a href={`mailto:${user.email}`}>Email: {user.email}</a>
        <a href={`tel:${user.phone}`}>Phone: {user.phone}</a>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onClick}>Close</Button>
      </Modal.Footer>
    </Modal>

    </>
  )
}
