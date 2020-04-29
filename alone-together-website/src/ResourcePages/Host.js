import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText} from 'reactstrap';
import { Link } from 'react-router-dom';

import './ResourcePages.css';

const axios = require("axios").default;

const Host = () => {

    const [resources, setResources] = useState([]);
  
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`https://project-accessibility.wl.r.appspot.com/api/v1/resources/ToHost`);
            setResources(result.data.data);
          };
          fetchData();
    });

    return(
        <div>
            <div className="header">
                <h1>💫 To Host 💫</h1>
                <h2>Coordinate a Virtual Meet up!</h2>
            </div>
            <div className="header-description">
                <p>
                    Want to host a virtual book club? Study hall? Sharing circle? Watch party? 
                    Whatever it is, pitch your idea below and leave your contact info so others can join in. 
                    Once it's official, feel free to add to the "To Attend" tab to get some more RSVPS!
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

export default Host;