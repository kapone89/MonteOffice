import React, { Component } from 'react';
import { View } from "react-native"
import { observer } from "mobx-react/native"
import NativeBase, { Button, Icon, Title, List, ListItem, Text } from 'native-base';
import IosTabs from "./ios_tabs";
import { withRouter } from 'react-router-native';
import ScreenPreview from "./screen_preview"

predefined = [
  { name: "wifi credentials", url: "http://freakone.pl/monte/wifi.html" },
  { name: "instafeed", url: "http://freakone.pl/monte/4.html" },
  { name: "monte logo", url: "http://jsbin.com/wokovo" },
  { name: "Classic Programmers Paintings", url: "http://cpp.kapone89.ml" },
  { name: "Sample GIF 1", url: "http://max.kapone89.ml#https://thumbs.gfycat.com/EnchantingHiddenAmethystsunbird-size_restricted.gif" },
  { name: "Sample GIF 2", url: "http://max.kapone89.ml/#http://i.imgur.com/132B17l.gif" },
]

@withRouter
export default class PredefinedScreens extends Component {
    render() {
        return (
          <NativeBase.Container>
              <NativeBase.Header>
                  <Button transparent>
                      <Icon name='ios-arrow-back' />
                  </Button>

                  <Title>PredefinedScreens</Title>

                  <Button transparent onPress={() => { this.props.router.push("/images_search") }}>
                      <Icon name="ios-search" />
                  </Button>
              </NativeBase.Header>

              <NativeBase.Content>


                <List>
                  {
                    predefined.map((pre) => {
                      return (
                        <View key={pre.name}>
                          <ListItem >
                              <Text>{pre.name}</Text>

                          </ListItem>
                          <ScreenPreview url={pre.url} onPress={() => { console.log(pre.name) }} />
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
