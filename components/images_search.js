import React, { Component } from 'react';
import { observer } from "mobx-react/native"
import NativeBase, { Button, Icon, Title, List, ListItem, Text } from 'native-base';
import { withRouter } from 'react-router-native';
import IosTabs from "./ios_tabs";
import { SearchBar } from 'react-native-elements'
import imagesSearchStore from "../stores/images_search_store"

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
