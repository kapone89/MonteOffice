import React, { Component } from 'react';
import { observer } from "mobx-react/native"
import NativeBase, { Button, Icon, Title, List, ListItem, Text } from 'native-base';
import IosTabs from "./ios_tabs";
import { withRouter } from 'react-router-native';

@withRouter
export default class PredefinedScreens extends Component {
    render() {
        return (
          <NativeBase.Container>
              <NativeBase.Header>
                  <Button transparent>
                      <Icon name='ios-arrow-back' />
                  </Button>

                  <Title>PredefinedScreens</Title>

                  <Button transparent onPress={() => { this.props.router.push("/images_search") }}>
                      <Icon name="ios-search" />
                  </Button>
              </NativeBase.Header>

              <NativeBase.Content>
                <List>
                  <ListItem >
                      <Text>Screens</Text>
                  </ListItem>
                  <ListItem>
                      <Text>Screens</Text>
                  </ListItem>
                  <ListItem>
                      <Text>Screens</Text>
                  </ListItem>
                </List>
              </NativeBase.Content>

              <NativeBase.Footer >
                 <IosTabs/>
             </NativeBase.Footer>
          </NativeBase.Container>
        );
    }
}
