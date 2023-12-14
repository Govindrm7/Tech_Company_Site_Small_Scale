import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './jobs.css';

const jobList = [
  {
    id: 1,
    title: 'Software Engineer',
    description: 'Develop and maintain high-quality software applications. Creating and sustaining top-notch software applications involves the meticulous process of conceptualizing, designing, and building robust and efficient solutions. This includes writing clean, scalable code, implementing innovative features, and ensuring seamless functionality across various platforms',
  },
  {
    id: 2,
    title: 'Data Analyst',
    description: 'Analyze and interpret complex data sets. Analyzing and interpreting complex data sets involves delving into extensive collections of data to derive meaningful insights and patterns. It requires employing statistical techniques, algorithms, and data visualization tools to identify trends, correlations, and outliers within the data. ',
  },
  {
    id: 3,
    title: 'UX/UI Designer',
    description: 'Create intuitive and visually appealing user interfaces. Craft engaging and visually captivating user interfaces that effortlessly guide users through their digital experiences. Design interfaces that are intuitive, making interactions seamless and user-friendly, ultimately enhancing user satisfaction and engagement.',
  },
];

const Jobs = () => 
{
    const Style = {
        fontFamily: 'Times New Roman, serif', 
        fontSize: '40px', 
        fontWeight: 'bold',
        color: '#333333', 


    };

    return (
        <div>
        <h1 style={Style} >Available Career Opportunities</h1>
        {jobList.map((job) => (
        <Card key={job.id} className="mb-3">
            <Card.Body style={ {background: "#FFE5B4"}}>
                <Card.Title style={{fontWeight : "bold"}} >{job.title}</Card.Title>
                <Card.Text>{job.description}</Card.Text>
                <Button variant="primary" size='sm'>Apply Now</Button>
            </Card.Body>
        </Card>
        ))}
        </div>
    );
}

export default Jobs;
