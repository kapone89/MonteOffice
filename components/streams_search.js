import React, { Component } from 'react';
import { observer } from "mobx-react/native"
import NativeBase, { Title, Icon, InputGroup, Input, Button, Grid, Col, Spinner } from 'native-base';
import { TouchableHighlight } from "react-native"
import { Item, ItemIcon, ItemContent, ItemText, Note, List } from "carbon-native"
import IosTabs from "./ios_tabs";
import { SearchBar } from 'react-native-elements'
import streamsStore from "../stores/streams_store"
import router from "../stores/router"


@observer
export default class StreamsSearch extends Component {
    render() {
        return (
          <NativeBase.Container theme={this.props.theme}>
              <NativeBase.Header>
                  <Button transparent onPress={() => { router.back() }}>
                      <Icon name='ios-arrow-back' />
                  </Button>

                  <Title>Search streams</Title>

                  { streamsStore.isWorking &&
                    <Button transparent>
                        <Spinner color="blue"/>
                    </Button>
                  }
              </NativeBase.Header>

              <NativeBase.Content>
                <SearchBar lightTheme onChangeText={(x) => streamsStore.search(x)} />

                <List>
                  {
                    streamsStore.searchResults.map((stream) => {
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
