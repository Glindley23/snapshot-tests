import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function GitHubCard() {
  return (
    <Card style={{ background: 'grey', width: '18rem' }}>
      <Card.Img variant="top" src="4676-gotime.png" />
      <Card.Body>
        <Card.Title>Glindley23</Card.Title>
        <Card.Text>
          This is a quick bio about my github page
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default GitHubCard;