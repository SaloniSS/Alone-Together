import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText} from 'reactstrap';
import { Link } from 'react-router-dom';

import './ResourcePages.css';

const GetSupport = () => {

    //Get Resources Here

    /*
        props.goals.map( (goal) => {
            return <li key={goal.id}>{goal.text}</li>;
        })
    */

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

export default GetSupport;