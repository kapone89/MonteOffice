import React, { Component } from 'react';
import { observer } from "mobx-react/native"
import { Container, Header, Content, Footer, Title, Icon, InputGroup, Input, Button, Grid, Col } from 'native-base';
import { TouchableHighlight } from "react-native"
import { Item, ItemIcon, ItemContent, ItemText, Note, List } from "carbon-native"
import IosTabs from "./ios_tabs";
import router from '../stores/router';
import streamsStore from "../stores/streams_store"
import icon from '../services/icon'

@observer
export default class PredefinedStreams extends Component {
    render() {
        return (
          <Container theme={this.props.theme}>
              <Header>
                  <Button transparent onPress={router.back}>
                      <Icon name={icon('arrow-back')} />
                  </Button>

                  <Title>Predefined Streams</Title>

                  <Button transparent onPress={() => { router.go("/streams_search") }}>
                      <Icon name={icon('search')} />
                  </Button>
              </Header>

              <Content>
                <List>
                  {
                    streamsStore.predefined.map((stream) => {
                      return (
                        <Item key={stream.id} onPress={() => { stream.play() }}>
                          <ItemIcon>
                            <Icon name={icon('play')}/>
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
              </Content>

              <Footer >
                 <IosTabs/>
             </Footer>
          </Container>
        );
    }
}
