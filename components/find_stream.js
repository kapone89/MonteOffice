import React, { Component } from 'react';
import { observer } from "mobx-react/native"
import { List, ListItem, Text } from 'native-base';

@observer
export default class FindStream extends Component {
    render() {
        return (
          <List>
            <ListItem >
                <Text>Find stream</Text>
            </ListItem>
            <ListItem>
                <Text>Find stream</Text>
            </ListItem>
            <ListItem>
                <Text>Find stream</Text>
            </ListItem>
          </List>
        );
    }
}
