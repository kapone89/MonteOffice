import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import BaseView from './components/base';
import { Container, Header, Title, Content, Footer, Button, Icon } from 'native-base';
import { DrawerLayoutAndroid } from 'react-native';
import IosTabs from "./components/ios_tabs"

export default class ReactMobxTest extends Component {
    render() {
        return (
          <Container>
              <Header>
                  <Button transparent>
                      <Icon name='ios-arrow-back' />
                  </Button>

                  <Title>Monterail Office</Title>
              </Header>

              <Content>
                <BaseView/>
              </Content>

              <Footer >
                 <IosTabs/>
             </Footer>
          </Container>
        );
    }
}


AppRegistry.registerComponent('ReactMobxTest', () => ReactMobxTest);
