import React, { Component } from 'react';
import { View } from "react-native"
import { observer } from "mobx-react/native"
import NativeBase, { Title, Icon, Button, Spinner, Card, CardItem, Text } from 'native-base';
import RNE from 'react-native-elements'
import IosTabs from "./ios_tabs";
import roomsStore from "../stores/rooms_store"
import { List, Item, ItemContent, ItemText, Toggle } from "carbon-native"
import router from "../stores/router"
import icon from '../services/icon'
import Toast from 'react-native-simple-toast';

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

  onRoomClick() {
    Toast.show("I'm just a rectangle...");
  }

  render(){
    return (
      <NativeBase.Container theme={this.props.theme}>
          <NativeBase.Header>
              <Button transparent onPress={() => { router.back() }}>
                  <Icon name={icon('arrow-back')} />
              </Button>

              <Title>Rooms status</Title>
          </NativeBase.Header>

          <NativeBase.Content>
            <Card>
              <CardItem header>
                  <Text>Available</Text>
              </CardItem>

              <CardItem>
                {
                  roomsStore.isWorking && <Spinner color="#f95346"/>
                }
                {
                  !roomsStore.isWorking && roomsStore.availableRooms.map((room) => {
                    return (
                      <RNE.Button key={room.id} title={room.description} backgroundColor={rooms_colors[room.id]} onPress={this.onRoomClick}/>
                    )
                  })
                }
                {
                  !roomsStore.isWorking && roomsStore.availableRooms.length == 0 &&
                  <Text>All rooms are occupied at the moment</Text>
                }
              </CardItem>

              <CardItem header>
                  <Text>Occupied</Text>
              </CardItem>

              <CardItem>
                {
                  roomsStore.isWorking && <Spinner color="#f95346"/>
                }
                {
                  !roomsStore.isWorking && roomsStore.occupiedRooms.map((room) => {
                    return (
                      <RNE.Button key={room.id} title={room.description} backgroundColor="gray" onPress={this.onRoomClick}/>
                    )
                  })
                }
                {
                  !roomsStore.isWorking && roomsStore.availableRooms.length == 0 &&
                  <Text>All rooms are available</Text>
                }
              </CardItem>
            </Card>
          </NativeBase.Content>

          <NativeBase.Footer >
             <IosTabs/>
         </NativeBase.Footer>
      </NativeBase.Container>
    )
  }
}
