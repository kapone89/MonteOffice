import React, { Component } from 'react';
import { WebView, TouchableOpacity } from "react-native"
import { observer } from "mobx-react/native"
import NativeBase, { Button, Icon, Title, List, ListItem, Text } from 'native-base';
import IosTabs from "./ios_tabs";
import { SearchBar } from 'react-native-elements'
import screensStore from "../stores/screens_store"

@observer
export default class ImagesSearch extends Component {
    render() {
        return (
          <NativeBase.Container>
              <NativeBase.Header>
                  <Button transparent>
                      <Icon name='ios-arrow-back' />
                  </Button>

                  <Title>ImagesSearch</Title>
              </NativeBase.Header>

              <NativeBase.Content>
                <SearchBar lightTheme onChangeText={(x) => console.log(x)} />

                <WebView
                  source={{uri: 'http:/google.com'}}
                  style={{alignSelf: 'stretch', height: 200}}
                />

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
              </NativeBase.Content>

              <NativeBase.Footer >
                 <IosTabs/>
             </NativeBase.Footer>
          </NativeBase.Container>
        );
    }
}
