import React, { Component } from 'react';
import { observer } from "mobx-react/native"
import { AppRegistry } from 'react-native';
import { Container, Header, Title, Content, Footer, Button, Icon } from 'native-base';
import { DrawerLayoutAndroid, Navigator, BackAndroid } from 'react-native';
import AndroidSidebar from "./components/android_sidebar"
import RoutesStore from "./stores/routes_store"

@observer
export default class ReactMobxTest extends Component {
    render() {
        return (
          <DrawerLayoutAndroid
            drawerWidth={300}
            drawerPosition={DrawerLayoutAndroid.positions.Left}
            renderNavigationView={() => <AndroidSidebar drawer={this.refs['DRAWER_REF']}/>}
            ref={'DRAWER_REF'}
          >
            <Navigator
              initialRoute={RoutesStore.routes[0]}
              initialRouteStack={RoutesStore.routes}
              renderScene={(route, navigator) => {
                RoutesStore.setNavigator(navigator);
                return (
                  <Container>
                      <Header>
                          <Button transparent onPress={() => {this.refs['DRAWER_REF'].openDrawer()}}>
                            <Icon name='ios-menu' />
                          </Button>

                          <Title>{route.title}</Title>

                      </Header>

                      <Content>
                        <route.component/>
                      </Content>
                  </Container>
                )
              }}
              configureScene={(route, routeStack) =>
                Navigator.SceneConfigs.FadeAndroid
              }
            />

          </DrawerLayoutAndroid>
        );
    }
}


AppRegistry.registerComponent('ReactMobxTest', () => ReactMobxTest);
BackAndroid.addEventListener('hardwareBackPress', () => {
  RoutesStore.back();
  true
})
