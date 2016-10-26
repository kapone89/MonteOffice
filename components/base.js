import React, { Component } from 'react';
import { observer } from "mobx-react/native"
import { List, ListItem, Text } from 'native-base';

@observer
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
