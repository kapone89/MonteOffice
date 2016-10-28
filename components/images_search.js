import React, { Component } from 'react';
import { observer } from "mobx-react/native"
import { List, ListItem, Text } from 'native-base';

@observer
export default class ImagesSearch extends Component {
    render() {
        return (
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
        );
    }
}
