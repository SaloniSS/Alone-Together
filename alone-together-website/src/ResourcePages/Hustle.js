import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText} from 'reactstrap';
import { Link } from 'react-router-dom';

import './ResourcePages.css';
import db from '../firebase';

const axios = require('axios').default;

class Hustle extends React.Component {
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
              if ((elementCategory) === ("To Hustle")){
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

export default Hustle;