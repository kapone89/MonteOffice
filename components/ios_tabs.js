import React, { Component } from 'react';
import { observer } from "mobx-react/native"
import { FooterTab, Button, Icon } from 'native-base';
import { withRouter } from 'react-router-native';

// export default const IosTabs = withRouter((props) => {

@withRouter
export default class IosTabs extends Component {
    render() {
        return (
          <FooterTab>
            <Button onPress={() => { this.props.router.push("/") }}>
                Now playing
                <Icon name='ios-play' />
            </Button>
            <Button onPress={() => { this.props.router.push("/predefined_streams") }}>
                Streams
                <Icon name='ios-search' />
            </Button>
            <Button onPress={() => { this.props.router.push("/predefined_screens") }}>
                Screens
                <Icon name='ios-desktop' />
            </Button>
          </FooterTab>
        );
      }
    }
