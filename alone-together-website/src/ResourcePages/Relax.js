import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText} from 'reactstrap';
import { Link } from 'react-router-dom';

import './ResourcePages.css';
import db from '../firebase';

const Relax = () => {

    const [resources, setResources] = useState([]);
  
    useEffect(() => {
        db.collection("To Relax").get().then(querySnapshot => {
          const data = querySnapshot.docs.map(doc => doc.data());
          console.log(data);
          setResources(data);
        });
    });

    return(
        <div>
            <div className="header">
                <h1>📖 To Relax 📖</h1>
                <h2>The Fun Stuff!</h2>
            </div>
            <div className="header-description">
                <p>
                    Share what you've been reading, watching, consuming that you think are *must do* for the community. 
                    Sky's the limit!
                </p>
            </div>
            <div className="resource">
                <Col className="card-padding">
                    {resources.map (resource => (
                        <a href={resource.link} target="_blank">
                            <Card className="portfolio-card">
                                <CardBody>
                                    <CardTitle>{resource.name}</CardTitle>
                                    <CardText><strong>Medium: </strong> {resource.medium} </CardText>
                                    <CardText><strong>Description: </strong> {resource.description} </CardText>
                                    <CardText><strong>Submitted By: </strong> {resource.submittedBy} </CardText>
                                </CardBody>
                            </Card>
                        </a>
                    ))}
                </Col>
            </div>
        </div>       
    );
}

export default Relax;