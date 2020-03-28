import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText} from 'reactstrap';
import { Link } from 'react-router-dom';

import './ResourcePages.css';
import db from '../firebase';

class Attend extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        resources: []
      };
    }
  
    componentDidMount() {
        db.collection("To Attend").get().then(querySnapshot => {
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

export default Attend;