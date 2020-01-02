import BaseLayout from'../components/layouts/BaseLayout';
import React from 'react';
import BasePage from '../components/BasePage';


class Blogs extends React.Component{
    render(){
    return (
      <BaseLayout {...this.props.auth}>
      <BasePage>
        <h1>Iam Blog page </h1>
        </BasePage>
  </BaseLayout>
    )  
  }
  }
  
  export default Blogs;