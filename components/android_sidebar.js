import React, { Component } from 'react';
import { observer } from "mobx-react/native"
import { Content, List, ListItem, Text, Icon } from 'native-base';
import RoutesStore from "../stores/routes_store"

@observer
export default class AndroidSidebar extends Component {
    render() {
        return (
          <Content>
            <List>
              <ListItem onPress={() => {RoutesStore.go("now_playing")}}>
                  <Icon name='ios-play' />
                  <Text>Now playing</Text>
              </ListItem>
              <ListItem onPress={() => {RoutesStore.go("find_stream")}}>
                  <Icon name='ios-search' />
                  <Text>Find stream</Text>
              </ListItem>
              <ListItem onPress={() => {RoutesStore.go("screens")}}>
                  <Icon name='ios-desktop' />
                  <Text>Screens</Text>
              </ListItem>
            </List>
          </Content>
        );
      }
    }
