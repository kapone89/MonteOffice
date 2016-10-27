import React, { Component } from 'react';
import { observer } from "mobx-react/native"
import { List, ListItem, Text } from 'native-base';

@observer
export default class NowPlaying extends Component {
    render() {
        return (
          <List>
            <ListItem >
                <Text>Now playing</Text>
            </ListItem>
            <ListItem>
                <Text>Now playing</Text>
            </ListItem>
            <ListItem>
                <Text>Now playing</Text>
            </ListItem>
          </List>
        );
    }
}
