import React, { Component } from 'react';
import { Container, Header, Content, Button, H1, H2, Text } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

class Login extends Component {
  restaurantLogin = () => {
    this.props.navigation.navigate('Restaurants');
  };
  organizationLogin =() =>{
    this.props.navigation.navigate('Organizations');
  };

  render() {
    return (
      <Container style={{  flex:1,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center'}} >
        <Content  >
        <H1 style={{textAlign: "center", marginBottom: "5%"}} > Dough-Nation</H1>
        <Grid >
          <Row>
          <Col  >
            <Button block style={{width: "80%", marginLeft:"10%"}}  onPress={this.restaurantLogin}>
            <H2 style={{color: "white"}}>Restaurants</H2>
            </Button>

          </Col>
          <Col >
          <Button block  style={{width: "80%", marginLeft:"10%"}} onPress={this.organizationLogin}>
          <H2 style={{color: "white"}} >Organizations</H2>
          </Button>
          </Col>
          </Row>
        </Grid>
      </Content>
    </Container>
  )
  };
};


export default Login;
