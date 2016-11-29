import React, { Component } from 'react';
import { observer } from "mobx-react/native"
import NativeBase, { Title, Icon, InputGroup, Input, Button, Grid, Col, Spinner } from 'native-base';
import { TouchableHighlight } from "react-native"
import { Item, ItemIcon, ItemContent, ItemText, Note, List } from "carbon-native"
import IosTabs from "./ios_tabs";
import { SearchBar } from 'react-native-elements'
import streamsStore from "../stores/streams_store"
import router from "../stores/router"
import icon from '../services/icon'


@observer
export default class StreamsSearch extends Component {
    searchStreamsDelayed(query) {
      clearTimeout(this.streamsSearchTimeout);
      this.streamsSearchTimeout = setTimeout(() => {
        streamsStore.search(query)
      }, 1000);
    }

    render() {
        return (
          <NativeBase.Container theme={this.props.theme}>
              <NativeBase.Header searchBar rounded>
                <NativeBase.InputGroup>
                    <Icon name={icon('search')} />
                    <Input placeholder="Find radio online" onChangeText={(x) => this.searchStreamsDelayed(x)} />
                    <Icon name={icon('musical-notes')} />
                </NativeBase.InputGroup>
                <Button transparent onPress={() => { router.back() }}>
                    Back
                </Button>
              </NativeBase.Header>

              <NativeBase.Content>
                {
                  streamsStore.isWorking && <Spinner color="#f95346"/>
                }

                {
                  !streamsStore.isWorking && <List>
                    {
                      streamsStore.searchResults.map((stream) => {
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
                }
              </NativeBase.Content>

              <NativeBase.Footer >
                 <IosTabs/>
             </NativeBase.Footer>
            </NativeBase.Container>
        );
    }
}
