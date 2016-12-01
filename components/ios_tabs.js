import React, { Component } from 'react';
import { observer } from "mobx-react/native"
import { FooterTab, Button, Icon } from 'native-base';
import router from '../stores/router';
import icon from '../services/icon'

@observer
export default class IosTabs extends Component {
    render() {
        return (
          <FooterTab>
            <Button onPress={() => { router.go("/") }}>
                Toilet
                <Icon name={icon('musical-notes')} />
            </Button>
            <Button onPress={() => { router.go("/predefined_screens") }}>
                Screens
                <Icon name={icon('desktop')} />
            </Button>
            <Button onPress={() => { router.go("/lights_switcher") }}>
                Lights
                <Icon name={icon('flash')} />
            </Button>
            <Button onPress={() => { router.go("/rooms_status") }}>
                Rooms
                <Icon name={icon('contacts')} />
            </Button>
          </FooterTab>
        );
      }
    }
