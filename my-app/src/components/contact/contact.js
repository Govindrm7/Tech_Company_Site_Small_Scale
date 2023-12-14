import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './conntact.css';
import contactImage from './contact.jpeg'; // Import your image file


const Contact = () => {
  return (
    <div className="page-container">
      <h1>Contact</h1>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={contactImage} />
        <Card.Body>
          <Card.Title>Get in Touch</Card.Title>
          <Card.Text>
           For any inquiries, collaborations, or questions, feel free to reach out to us. 
            We're always here to assist you! Contact us via email or phone.
            <br />
            Email: contact@techvisionsolutions.com
            <br />
            Phone: +1 123 456 7890
          </Card.Text>
          <Button variant="primary">Contact</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Contact;
