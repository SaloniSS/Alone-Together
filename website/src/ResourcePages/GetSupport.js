import React, { useState, useEffect} from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText} from 'reactstrap';

import './ResourcePages.css';

const axios = require("axios").default;

const GetSupport = () => {

    const [resources, setResources] = useState([]);
  
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`https://project-alone-together.wl.r.appspot.com/api/v1/resources/ToGetSupport`);
            setResources(result.data.data);
          };
          fetchData();
    });

    return(
        <div>
            <div className="header">
                <h1>💜 Get Supported 💜</h1>
                <h2>Online Resources</h2>
            </div>
            <div className="header-description">
                <p>
                    Share free resources on how to cope with anxiety and stress from the coronavirus. 
                    Articles, guidebooks, or resources that other brands / organizations have created. 
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

export default GetSupport;