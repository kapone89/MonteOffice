import React, { Component } from 'react';
import { observer } from "mobx-react/native"
import NativeBase, { Title, Icon, InputGroup, Input, Button, Grid, Col } from 'native-base';
import { TouchableHighlight } from "react-native"
import { Item, ItemIcon, ItemContent, ItemText, Note, List } from "carbon-native"
import IosTabs from "./ios_tabs";
import { withRouter } from 'react-router-native';
import streamsStore from "../stores/streams_store"

@withRouter
export default class PredefinedStreams extends Component {
    render() {
        return (
          <NativeBase.Container>
              <NativeBase.Header>
                  <Button transparent>
                      <Icon name='ios-arrow-back' />
                  </Button>

                  <Title>Predefined Streams</Title>

                  <Button transparent onPress={() => { this.props.router.push("/streams_search") }}>
                      <Icon name="ios-search" />
                  </Button>
              </NativeBase.Header>

              <NativeBase.Content>
                <List>
                  {
                    streamsStore.predefined.map((stream) => {
                      return (
                        <Item key={stream.id} onPress={() => { stream.play() }}>
                          <ItemIcon>
                            <Icon name="ios-play"/>
                          </ItemIcon>
                          <ItemContent>
                            <ItemText>{stream.name}</ItemText>
                            <Note>{stream.genre}</Note>
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
