import React, { Component } from 'react';
import { WebView, TouchableOpacity, View } from "react-native"
import { observer } from "mobx-react/native"
import NativeBase, { Button, Icon, Title, List, ListItem, Text, Spinner } from 'native-base';
import IosTabs from "./ios_tabs";
import { SearchBar } from 'react-native-elements'
import screensStore from "../stores/screens_store"
import ScreenThumbnail from "./screen_thumbnail"
import Screen from "../models/screen"
import lodash from "lodash"
import router from "../stores/router"

@observer
export default class ImagesSearch extends Component {
    render() {
        var screen = new Screen({ name: "Classic Programmers Paintings", website: "http://cpp.kapone89.ml" })
        return (
          <NativeBase.Container>
              <NativeBase.Header>
                  <Button transparent>
                      <Icon name='ios-arrow-back' />
                  </Button>

                  <Title>Find GIF</Title>

                  { screensStore.isWorking &&
                    <Button transparent>
                        <Spinner color="blue"/>
                    </Button>
                  }
              </NativeBase.Header>

              <NativeBase.Content>
                <SearchBar lightTheme onChangeText={(x) => screensStore.search(x)} />

                {
                  lodash.chunk(screensStore.searchResults, 3).map((chunk) => {
                    return (
                      <View key={chunk[0].id} style={{flex: 1, flexDirection: 'row'}}>
                        {
                          chunk.map((screen) => {
                            return (
                              <ScreenThumbnail
                                thumb
                                key={screen.id}
                                screen={screen}
                                size={0.333}
                                onPress={() => { screensStore.selectScreen(screen); router.go("/screen_preview") }}
                              />
                            )
                          })
                        }
                      </View>
                    )
                  })
                }
              </NativeBase.Content>

              <NativeBase.Footer >
                 <IosTabs/>
             </NativeBase.Footer>
          </NativeBase.Container>
        );
    }
}
