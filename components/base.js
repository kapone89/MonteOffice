import React, { Component } from 'react';
import { List, ListItem, Text } from 'native-base';

export default class BaseView extends Component {
    render() {
        return (
          <List>
            <ListItem >
                <Text>Simon Mignolet</Text>
            </ListItem>
            <ListItem>
                <Text>Nathaniel Clyne</Text>
            </ListItem>
            <ListItem>
                <Text>Dejan Lovren</Text>
            </ListItem>
          </List>
        );
    }
}
