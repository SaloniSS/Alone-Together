import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText} from 'reactstrap';
import { Link } from 'react-router-dom';

import './ResourcePages.css';
import db from '../firebase';

class Hustle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        resources: []
      };
    }
  
    componentDidMount() {
        db.collection("To Hustle").get().then(querySnapshot => {
          const data = querySnapshot.docs.map(doc => doc.data());
          console.log(data);
          this.setState({ resources: data });
        });
    }

    render() {
        const { resources } = this.state;
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
}

export default Hustle;