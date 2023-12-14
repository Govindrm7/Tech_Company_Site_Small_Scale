import React from 'react';
import { Card, Button } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <div className="page-container">
      <h1>About Us</h1>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>About Us Page</Card.Title>
          <Card.Text>
          We are committed to excellence, consistently delivering top-tier solutions and services tailored to meet the evolving needs of our clients. Our dedication revolves around crafting innovative, high-quality solutions that drive success and elevate businesses in today's dynamic landscape. With a focus on precision and customer satisfaction, we strive to exceed expectations, ensuring our clients achieve their goals with our cutting-edge offerings.          </Card.Text>
          <Button variant="primary">Learn more</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AboutUs;
