import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText} from 'reactstrap';
import { Link } from 'react-router-dom';

import './ResourcePages.css';

const Hustle = () => {
    return(
        <div>
            <div className="header">
                <h1>💻 To Hustle 💻</h1>
                <h2>Getting to Werk</h2>
            </div>
            <div className="header-description">
                <p>
                    We know you've been keeping busy! 
                    Share with us the side projects or business ideas that you're working on. 
                    Tell us if you just want some love or if you have a request for virtual help in any way. 
                    Don't have a project? Browse the incredible things your community members are building! 
                    Or drop links to free resources to staying productive. 
                </p>
            </div>
            <div className="resource">
                <Col className="card-padding">
                    <Link to ='/' >
                        <Card className="portfolio-card">
                        <CardBody>
                                <CardTitle>Title</CardTitle>
                                <CardText><strong>Medium: </strong></CardText>
                                <CardText><strong>Description: </strong></CardText>
                                <CardText><strong>Submitted By: </strong></CardText>
                            </CardBody>
                        </Card>
                    </Link>
                </Col>
            </div>

        </div>       
    );
};

export default Hustle;