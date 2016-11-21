import React, { Component } from 'react';
import { observer } from "mobx-react/native"
import { AppRegistry } from 'react-native';
import { Container, Header, Title, Content, Footer, Button, Icon } from 'native-base';
import { DrawerLayoutAndroid, Navigator } from 'react-native';
import IosTabs from "./components/ios_tabs"
import router from "./stores/router"

import { nativeHistory, Route, Router, StackRoute } from 'react-router-native';

@observer
export default class ReactMobxTest extends Component {
    render() {
        const CurrentRoute = router.currentComponent
        return (
          <CurrentRoute />
        );
    }
}


AppRegistry.registerComponent('ReactMobxTest', () => ReactMobxTest);
