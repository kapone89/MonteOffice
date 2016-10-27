import React, { Component } from 'react';
import { observer } from "mobx-react/native"
import { AppRegistry } from 'react-native';
import { Container, Header, Title, Content, Footer, Button, Icon } from 'native-base';
import { DrawerLayoutAndroid, Navigator } from 'react-native';
import IosTabs from "./components/ios_tabs"
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
              return (<Container>
                  <Header>
                      <Button transparent onPress={() => {RoutesStore.go()}}>
                          <Icon name='ios-arrow-back' />
                      </Button>

                      <Title>{route.title}</Title>
                  </Header>

                  <Content>
                    <route.component/>
                  </Content>

                  <Footer >
                     <IosTabs/>
                 </Footer>
              </Container>)
            }}
            configureScene={(route, routeStack) =>
              Navigator.SceneConfigs.FadeAndroid
            }
          />
        );
    }
}


AppRegistry.registerComponent('ReactMobxTest', () => ReactMobxTest);
