import React, { Component } from 'react';
import { observer } from "mobx-react/native"
import { FooterTab, Button, Icon } from 'native-base';
import RoutesStore from "../stores/routes_store"

@observer
export default class IosTabs extends Component {
    render() {
        return (
          <FooterTab>
            <Button onPress={() => {RoutesStore.go("now_playing")}}>
                Now playing
                <Icon name='ios-play' />
            </Button>
            <Button onPress={() => {RoutesStore.go("predefined_streams")}}>
                Find stream
                <Icon name='ios-search' />
            </Button>
            <Button onPress={() => {RoutesStore.go("predefined_screens")}}>
                Screens
                <Icon name='ios-desktop' />
            </Button>
          </FooterTab>
        );
      }
    }
