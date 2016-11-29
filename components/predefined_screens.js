import React, { Component } from 'react';
import { View } from "react-native"
import { observer } from "mobx-react/native"
import NativeBase, { Button, Icon, Title, List, ListItem, Text } from 'native-base';
import IosTabs from "./ios_tabs";
import router from '../stores/router';
import ScreenThumbnail from "./screen_thumbnail"
import Screen from "../models/screen"
import screensStore from "../stores/screens_store"
import icon from '../services/icon'

@observer
export default class PredefinedScreens extends Component {
    render() {
        return (
          <NativeBase.Container theme={this.props.theme}>
              <NativeBase.Header>
                  <Button transparent onPress={() => { router.back() }}>
                      <Icon name={icon('arrow-back')} />
                  </Button>

                  <Title>Predefined screens</Title>

                  <Button transparent onPress={() => { router.go("/images_search") }}>
                      <Icon name={icon('search')} />
                  </Button>
              </NativeBase.Header>

              <NativeBase.Content>


                <List>
                  {
                    screensStore.predefined.map((screen) => {
                      return (
                        <View key={screen.id}>
                          <ListItem >
                              <Text>{screen.name}</Text>

                          </ListItem>
                          <ScreenThumbnail screen={screen} size={1} onPress={() => { screensStore.selectScreen(screen); router.go("/screen_preview") }} />
                        </View>
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
