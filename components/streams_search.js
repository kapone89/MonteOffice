import React, { Component } from 'react';
import { observer } from "mobx-react/native"
import { Icon, InputGroup, Input, Button, Grid, Col } from 'native-base';
import { TouchableHighlight } from "react-native"
import { Item, ItemIcon, ItemContent, ItemText, Note, List } from "carbon-native"

@observer
export default class StreamsSearch extends Component {
    render() {
        return (
          <List>
            {
              [1, 2, 3, 4, 5].map((x) => {
                return (
                  <Item key={x} onPress={() => {}}>
                    <ItemIcon>
                      <Icon name="ios-play"/>
                    </ItemIcon>
                    <ItemContent>
                      <ItemText>Radio {x}</ItemText>
                      <Note>R&B</Note>
                    </ItemContent>
                  </Item>
                )
              })
            }
          </List>
        );
    }
}
