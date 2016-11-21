import React, { Component } from 'react';
import { WebView, TouchableOpacity } from "react-native"
import { observer } from "mobx-react/native"
import NativeBase, { Button, Icon, Title, List, ListItem, Text } from 'native-base';
import IosTabs from "./ios_tabs";
import ScreenThumbnail from "./screen_thumbnail"
import screensStore from "../stores/screens_store"

@observer
export default class ScreenPreview extends Component {
    render() {
        return (
          <NativeBase.Container>
              <NativeBase.Header>
                  <Button transparent>
                      <Icon name='ios-arrow-back' />
                  </Button>

                  <Title>Screen preview</Title>
              </NativeBase.Header>

              <NativeBase.Content>
                <ScreenThumbnail screen={screensStore.chosenScreen} />
              </NativeBase.Content>

              <NativeBase.Footer >
                 <IosTabs/>
             </NativeBase.Footer>
          </NativeBase.Container>
        );
    }
}
