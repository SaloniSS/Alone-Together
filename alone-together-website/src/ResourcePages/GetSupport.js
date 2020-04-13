import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText} from 'reactstrap';

import './ResourcePages.css';
import db from '../firebase';

class GetSupport extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        resources: []
      };
    }
  
    componentDidMount() {
        db.collection("To Get Support").get().then(querySnapshot => {
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

export default GetSupport;