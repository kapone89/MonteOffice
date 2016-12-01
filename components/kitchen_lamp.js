import React, { Component } from 'react';
import { View } from "react-native"
import { observer } from "mobx-react/native"
import NativeBase, { Title, Icon, Button, Spinner, Card, CardItem, Text } from 'native-base';
import RNE from 'react-native-elements'
import IosTabs from "./ios_tabs";
import { List, Item, ItemContent, ItemText, Toggle } from "carbon-native"
import router from "../stores/router"
import icon from '../services/icon'
import Toast from 'react-native-simple-toast';
import lightsStore from "../stores/lights_store"

@observer
export default class KitchenLamp extends Component {
  async setColor(colorId) {
    Toast.show('Wait...');
    await lightsStore.setKitchenLampColor(colorId)
    Toast.show('Done!');
  }

  render(){
    return (
      <NativeBase.Container theme={this.props.theme}>
          <NativeBase.Header>
              <Button transparent onPress={() => { router.back() }}>
                  <Icon name={icon('arrow-back')} />
              </Button>

              <Title>Kitchen lamp color</Title>
          </NativeBase.Header>

          <NativeBase.Content>
            <View style={{marginTop: 10}}>
            {
              lightsStore.kitchenLampColors.map((color) => {
                return (
                  <RNE.Button
                    key={color.id}
                    title={color.name}
                    backgroundColor={color.code}
                    color={color.inverse_text ? "black" : "white"}
                    onPress={() => this.setColor(color.id)}
                  />
                )
              })
            }
            </View>
          </NativeBase.Content>

          <NativeBase.Footer >
             <IosTabs/>
         </NativeBase.Footer>
      </NativeBase.Container>
    )
  }
}
