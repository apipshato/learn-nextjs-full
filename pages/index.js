import React from 'react';
import Typed from 'react-typed';
import BaseLayout from'../components/layouts/BaseLayout';
import {Button, Container, Row, Col } from 'reactstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';



class Index extends React.Component{

constructor(props) {
  super(props); 
  this.roles = ['Developer', 'Tech lover', 'Cloud Computing AWS','React.js'];
}
      render() {
       const { isAuthenticated, user }=this.props.auth;

          return (
            <BaseLayout className="cover" {...this.props.auth} headerType="index">
            <div className="main-section">
              <div className="background-image">
                <img src="/static/images/4.2 background-index.png" />
              </div>
          
              <Container>
                <Row>
                  <Col md="6">
                    <div className="hero-section">
                      <div className={`flipper`}>
                        <div className="back">
                          <div className="hero-section-content">
                            <h2> Full Stack Web Developer </h2>
                            <div className="hero-section-content-intro">
                              Have a look at my portfolio and job history.
                            </div>
                          </div>
                          <img className="image" src="/static/images/4.1 section-1.png"/>
                          <div className="shadow-custom">
                            <div className="shadow-inner"> </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md="6" className="hero-welcome-wrapper">
                    <div className="hero-welcome-text">
                        <h1>
                        { isAuthenticated && <span><b> {user.name}</b> </span> }
                        Welcome to the portfolio website of Afif Shato S.Kom
                        Get informed, collaborate and discover projects I was working on through the years!
                      </h1>
                     
                      </div>
                  <Typed                    
                    loop
                    typeSpeed={60}
                    backSpeed={60}
                    strings={this.roles}
                    backDelay={1000}
                    className="self-typed"
                    loopCount={0}
                    showCursor
                    cursorChar="|"
                  />
                  
                    
                    <div className="hero-welcome-bio">
                      <h1>
                        Let's take a look on my work.
                      </h1>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </BaseLayout>
                  
                
          )  
        }
      }
    

        export default Index;

      