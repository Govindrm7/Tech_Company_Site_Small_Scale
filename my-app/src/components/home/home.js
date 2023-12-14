import React from 'react';
import  Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './home.css';
import HomeImage from './company.jpeg'; // Import your image file


const Home = () => {
  return (
    <div className="page-container">
      <h1>Welcome to TechVision Solutions</h1>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={HomeImage} />
        <Card.Body>
          <Card.Title>Leading Innovation in Technology</Card.Title>
          <Card.Text>
            TechVision Solutions is committed to delivering cutting-edge technology solutions and services. 
            Our focus is on driving innovation and excellence in every aspect of technology.
            We specialize in software development, IT consulting, and system integration services, 
            empowering businesses to thrive in the digital era.
            Welcome to our website and explore the future of technology with us!
          </Card.Text>
          <Button variant="primary">Explore More</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;
