import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText} from 'reactstrap';
import { Link } from 'react-router-dom';

import './ResourcePages.css';
import db from '../firebase';

const axios = require('axios').default;

class Attend extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        resources: []
      };
    }
  
    componentDidMount() {
        axios.get('https://rowdyhacks-2020.appspot.com/api/v1/resources')
        .then(function (response) {
          let resourceData = [];
          let resourceArray = response.data.data;
          resourceArray.forEach(element => {
              let elementCategory = element.category;
              console.log(elementCategory);
              if ((elementCategory) === ("To Attend")){
                console.log(element);
                resourceData.push(element);
              }
          });
          this.setState({ resources :  resourceData});
        }.bind(this))
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {            
        }
      );  
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
                            <a href={resource.url} target="_blank">
                                <Card className="portfolio-card">
                                    <CardBody>
                                        <CardTitle>{resource.title}</CardTitle>
                                        <CardText><strong>Medium: </strong> {resource.medium} </CardText>
                                        <CardText><strong>Description: </strong> {resource.description} </CardText>
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