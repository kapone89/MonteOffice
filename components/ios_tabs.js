import React, { Component } from 'react';
import { observer } from "mobx-react/native"
import { FooterTab, Button, Icon } from 'native-base';

@observer
export default class IosTabs extends Component {
    render() {
        return (
          <FooterTab>
            <Button>
                Now playing
                <Icon name='ios-play' />
            </Button>
            <Button>
                Find stream
                <Icon name='ios-search' />
            </Button>
            <Button>
                Screens
                <Icon name='ios-desktop' />
            </Button>
          </FooterTab>
        );
      }
    }
