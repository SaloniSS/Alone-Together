import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText} from 'reactstrap';
import { Link } from 'react-router-dom';

import './ResourcePages.css';

const Relax = () => {
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

export default Relax;