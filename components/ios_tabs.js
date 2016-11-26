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
                Toilet
                <Icon name='ios-musical-notes' />
            </Button>
            <Button onPress={() => { router.go("/predefined_screens") }}>
                Screens
                <Icon name='ios-desktop' />
            </Button>
            <Button onPress={() => { router.go("/lights_switcher") }}>
                Lights
                <Icon name='ios-flash' />
            </Button>
            <Button onPress={() => { router.go("/rooms_status") }}>
                Rooms
                <Icon name='ios-contacts' />
            </Button>
          </FooterTab>
        );
      }
    }
