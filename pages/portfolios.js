import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import { Link } from '../routes';
import axios from 'axios';
import {Col, Row, Card, CardHeader, CardBody, CardText, CardTitle} from 'reactstrap';

//import { Col, Row, Button } from 'reactstrap';
//import PortfolioCard from '../components/portfolios/PortfolioCard';

//import { Router } from '../routes';

//import { getPortfolios, deletePortfolio } from '../actions';

class Portfolios extends React.Component {

  static async getInitialProps() {
    let posts = [];

    try {
     const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
     posts = response.data;
    }catch(err){
      console.error(err);
    }
      return {posts: posts.splice(0,10)};
    }
    renderPost(posts){
      return posts.map((post, index) => {
        return (
          <Col md="4">
          <React.Fragment key={index}>
            <span>
              <Card className="portfolio-card">
                <CardHeader className="portfolio-card-header">Some Position {index}</CardHeader>
                <CardBody>
                  <p className="portfolio-card-city"> Some Location {index} </p>
                  <CardTitle className="portfolio-card-title">Some Company {index}</CardTitle>
                  <CardText className="portfolio-card-text">Some Description {index}</CardText>
                  <div className="readMore"> </div>
                </CardBody>
              </Card>
            </span>
          </React.Fragment>
        </Col>
          )
      })
    }

    render(){
      const { posts } = this.props

      return (

        <BaseLayout {...this.props.auth}>
        <BasePage className="portfolio-page" title="Portfolios">
        <Row>
        {this.renderPost(posts)}
        </Row>
        </BasePage>
        </BaseLayout>
      )
    }
  }


  

export default Portfolios;