import React from 'react';
import { Card, CardBody, CardTitle, CardText, Col} from 'reactstrap';

import './ResourcePages.css';

const Resource = (props) => {

    return(
        <div>
            <Col className="card-padding">
                <a href={props.resource.url} target="_blank" rel="noopener noreferrer">
                    <Card className="portfolio-card">
                        <CardBody>
                            <CardTitle>{props.resource.title}</CardTitle>
                            <CardText><strong>Medium: </strong> {props.resource.medium} </CardText>
                            <CardText><strong>Description: </strong> {props.resource.description} </CardText>
                            <CardText><strong>Submitted By: </strong> {props.resource.submittedBy} </CardText>
                        </CardBody>
                    </Card>
                </a>
            </Col>
        </div>       
    );
}

export default Resource;