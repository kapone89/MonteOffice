import React, { Component } from 'react';
import { FooterTab, Button, Icon } from 'native-base';

export default class IosTabs extends Component {
    render() {
        return (
          <FooterTab>
            <Button active>
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
