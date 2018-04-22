import React, { Component } from 'react';
import { Container, Header, Content, Button, H1, H2, Text } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

class Restaurants extends Component {

  render() {
    return (
      <Container style={{  flex:1,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center'}} >
        <Content  >
        <Grid >
          <Row>
          <Col>
          <H1>HIIIII 2222</H1>
          </Col>
          </Row>
        </Grid>
      </Content>
    </Container>
  )
  };
};


export default Restaurants;
