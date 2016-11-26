import React, { Component } from 'react';
import { observer } from "mobx-react/native"
import { FooterTab, Button, Icon } from 'native-base';
import router from '../stores/router';

// export default const IosTabs = withRouter((props) => {

@observer
export default class IosTabs extends Component {
    render() {
        return (
          <FooterTab>
            <Button onPress={() => { router.go("/") }}>
                Now playing
                <Icon name='ios-play' />
            </Button>
            <Button onPress={() => { router.go("/predefined_streams") }}>
                Streams
                <Icon name='ios-search' />
            </Button>
            <Button onPress={() => { router.go("/predefined_screens") }}>
                Screens
                <Icon name='ios-desktop' />
            </Button>
            <Button onPress={() => { router.go("/lights_switcher") }}>
                Lights
                <Icon name='ios-flash' />
            </Button>
          </FooterTab>
        );
      }
    }
