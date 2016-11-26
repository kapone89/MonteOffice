import React, { Component } from 'react';
import { View } from "react-native"
import { observer } from "mobx-react/native"
import NativeBase, { Title, Icon, Button, Spinner } from 'native-base';
import RNE from 'react-native-elements'
import IosTabs from "./ios_tabs";
import roomsStore from "../stores/rooms_store"
import { List, Item, ItemContent, ItemText, Toggle } from "carbon-native"
import router from "../stores/router"

const rooms_colors = [
  "",
  "#FF851B", // orange
  "#2ECC40", // green
  "#B10DC9", // kebab
  "#0074D9", // blue
  "#FF4136", // red
  "#7FDBFF", // fish tank
]

@observer
export default class RoomsStatus extends Component {
  componentDidMount(){
    roomsStore.reload()
  }

  render(){
    return (
      <NativeBase.Container theme={this.props.theme}>
          <NativeBase.Header>
              <Button transparent onPress={() => { router.back() }}>
                  <Icon name='ios-arrow-back' />
              </Button>

              <Title>Rooms status</Title>

              { roomsStore.isWorking &&
                <Button transparent>
                    <Spinner color="white"/>
                </Button>
              }
          </NativeBase.Header>

          <NativeBase.Content>
            <View style={{marginTop: 10}}>
              {
                roomsStore.rooms.map((room) => {
                  return (
                    <RNE.Button
                      key={room.id}
                      title={room.description}
                      backgroundColor={room.busy ? 'gray' : rooms_colors[room.id]}
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
