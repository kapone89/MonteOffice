import React, { Component } from 'react';
import { observer } from "mobx-react/native"
import { AppRegistry } from 'react-native';
import BaseView from './components/base';
import { Container, Header, Title, Content, Footer, Button, Icon } from 'native-base';
import { DrawerLayoutAndroid } from 'react-native';
import AndroidSidebar from "./components/android_sidebar"

@observer
export default class ReactMobxTest extends Component {
    renderSidebar() {
      return (
        <AndroidSidebar/>
      )
    }
    render() {
        return (
          <DrawerLayoutAndroid
            drawerWidth={300}
            drawerPosition={DrawerLayoutAndroid.positions.Left}
            renderNavigationView={() => this.renderSidebar()}>
              <Container>
                  <Header>
                      <Button transparent>
                        <Icon name='ios-menu' />
                      </Button>

                      <Title>Monterail Office</Title>

                  </Header>

                  <Content>
                    <BaseView/>
                  </Content>
              </Container>
            </DrawerLayoutAndroid>
        );
    }
}


AppRegistry.registerComponent('ReactMobxTest', () => ReactMobxTest);
