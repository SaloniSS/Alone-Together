import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText} from 'reactstrap';
import { Link } from 'react-router-dom';

import './ResourcePages.css';

const Host = () => {
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
                    <Link to ='/' >
                        <Card className="portfolio-card">
                            <CardBody>
                                <CardTitle>Title</CardTitle>
                                <CardText>Description</CardText>
                            </CardBody>
                        </Card>
                    </Link>
                </Col>
            </div>

        </div>       
    );
};

export default Host;