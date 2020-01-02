import BaseLayout from'../components/layouts/BaseLayout';
import React from 'react';


class SuperComponents extends React.Component{

        constructor(props){
            super(props);
            this.someVariable='just some variable';
        }
        alertName(title){
            alert(title)
        }

    render(){
    return (
      <BaseLayout>
        <h1>Iam Blog page </h1>
  </BaseLayout>
    )  
  }
  }
  
  export default SuperComponents;