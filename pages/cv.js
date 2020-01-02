import BaseLayout from'../components/layouts/BaseLayout';
import React from 'react';
import BasePage from '../components/BasePage';

class Cv extends React.Component{
    render(){
    return (
      <BaseLayout {...this.props.auth}>
      <BasePage>
        <h1>Iam Cv page </h1>
        </BasePage>
       </BaseLayout>
    )  
  }
  }
  
  export default Cv;