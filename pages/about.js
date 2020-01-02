import BaseLayout from'../components/layouts/BaseLayout';
import React from 'react';
import BasePage from '../components/BasePage';
//import { Row, Col } from 'reactstrap';

class About extends React.Component {

  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className="about-page" title="Iam about Page">
        
        </BasePage>
        </BaseLayout>
    )

  }
}
        
export default About;