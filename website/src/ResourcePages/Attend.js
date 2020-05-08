import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText} from 'reactstrap';
import { Link } from 'react-router-dom';

import './ResourcePages.css';

const axios = require("axios").default;

const Attend = () => {

    const [resources, setResources] = useState([]);
  
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`https://project-alone-together.wl.r.appspot.comm/api/v1/resources/ToAttend`);
            setResources(result.data.data);
          };
          fetchData();
    });

    return(
        <div>
            <div className="header">
                <h1>🎟️ Attend 🎟️</h1>
                <h2>Let's Meet up virtually!</h2>
            </div>
            <div className="header-description">
                <p>
                    Share free virtual events that other individuals, brands or organizations are hosting. 
                    We'll see you there!  
                </p>
            </div>
            <div className="resource">
                <Col className="card-padding">
                    {resources.map (resource => (
                        <a href={resource.url} target="_blank">
                            <Card className="portfolio-card">
                                <CardBody>
                                    <CardTitle>{resource.title}</CardTitle>
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

export default Attend;