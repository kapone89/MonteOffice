import React, { Component } from 'react';
import { Content, List, ListItem, Text, Icon } from 'native-base';

export default class AndroidSidebar extends Component {
    render() {
        return (
          <Content>
            <List>
              <ListItem >
                  <Icon name='ios-play' />
                  <Text>Now playing</Text>
              </ListItem>
              <ListItem>
                  <Icon name='ios-search' />
                  <Text>Find stream</Text>
              </ListItem>
              <ListItem>
                  <Icon name='ios-desktop' />
                  <Text>Screens</Text>
              </ListItem>
            </List>
          </Content>
        );
      }
    }
