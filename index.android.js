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
          <Navigator
            initialRoute={RoutesStore.routes[0]}
            initialRouteStack={RoutesStore.routes}
            renderScene={(route, navigator) => {
              RoutesStore.setNavigator(navigator);
              return (<DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => <AndroidSidebar/>}>
                  <Container>
                      <Header>
                          <Button transparent>
                            <Icon name='ios-menu' />
                          </Button>

                          <Title>{route.title}</Title>

                      </Header>

                      <Content>
                        <route.component/>
                      </Content>
                  </Container>
                </DrawerLayoutAndroid>)
            }}
            configureScene={(route, routeStack) =>
              Navigator.SceneConfigs.FloatFromBottomAndroid
            }
          />
        );
    }
}


AppRegistry.registerComponent('ReactMobxTest', () => ReactMobxTest);
BackAndroid.addEventListener('hardwareBackPress', () => {
  RoutesStore.back();
  true
})
