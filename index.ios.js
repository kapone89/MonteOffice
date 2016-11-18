import React, { Component } from 'react';
import { observer } from "mobx-react/native"
import { AppRegistry } from 'react-native';
import { Container, Header, Title, Content, Footer, Button, Icon } from 'native-base';
import { DrawerLayoutAndroid, Navigator } from 'react-native';
import IosTabs from "./components/ios_tabs"

import NowPlaying from "./components/now_playing";
import StreamsSearch from "./components/streams_search";
import ImagesSearch from "./components/images_search";
import PredefinedScreens from "./components/predefined_screens";
import PredefinedStreams from "./components/predefined_streams";

import { nativeHistory, Route, Router, StackRoute } from 'react-router-native';

export default class ReactMobxTest extends Component {
    render() {
        return (
          <Router history={nativeHistory}>
              <Route path="/" component={PredefinedScreens} />
              <Route path="/streams_search" component={StreamsSearch} />
              <Route path="/images_search" component={ImagesSearch} />
              <Route path="/predefined_screens" component={PredefinedScreens} />
              <Route path="/predefined_streams" component={PredefinedStreams} />
          </Router>
        );
    }
}


AppRegistry.registerComponent('ReactMobxTest', () => ReactMobxTest);
