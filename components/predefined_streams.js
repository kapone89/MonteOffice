import React, { Component } from 'react';
import { observer } from "mobx-react/native"
import NativeBase, { Title, Icon, InputGroup, Input, Button, Grid, Col } from 'native-base';
import { TouchableHighlight } from "react-native"
import { Item, ItemIcon, ItemContent, ItemText, Note, List } from "carbon-native"
import IosTabs from "./ios_tabs";
import { withRouter } from 'react-router-native';

@withRouter
export default class PredefinedStreams extends Component {
    render() {
        return (
          <NativeBase.Container>
              <NativeBase.Header>
                  <Button transparent>
                      <Icon name='ios-arrow-back' />
                  </Button>

                  <Title>PredefinedStreams</Title>

                  <Button transparent onPress={() => { this.props.router.push("/streams_search") }}>
                      <Icon name="ios-search" />
                  </Button>
              </NativeBase.Header>

              <NativeBase.Content>
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
              </NativeBase.Content>

              <NativeBase.Footer >
                 <IosTabs/>
             </NativeBase.Footer>
          </NativeBase.Container>
        );
    }
}
