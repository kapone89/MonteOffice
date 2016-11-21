import React, { Component } from 'react';
import { View } from "react-native"
import { observer } from "mobx-react/native"
import NativeBase, { Button, Title, Spinner, Grid, Col, Card, CardItem, Text, Icon } from 'native-base';
import { Range, H1, H4 } from 'carbon-native';
import IosTabs from "./ios_tabs";
import { withRouter } from 'react-router-native';
import nowPlayingStore from "../stores/now_playing_store"

@observer
export default class NowPlaying extends Component {
    componentDidMount() { nowPlayingStore.reload() }
    render() {
        return (
          <NativeBase.Container>
              <NativeBase.Header>
                  <Button transparent>
                      <Icon name='ios-arrow-back' />
                  </Button>

                  <Title>Now playing</Title>

                  <Button transparent onPress={() => { nowPlayingStore.reload() }}>
                      <Icon name="ios-refresh" />
                  </Button>
              </NativeBase.Header>

              <NativeBase.Content>
                <Card>
                    {
                      nowPlayingStore.isWorking && <View>
                        <CardItem header>
                            <Text>Reloading...</Text>
                        </CardItem>

                        <CardItem>
                            <Spinner color="blue"/>
                        </CardItem>
                      </View>
                    }

                    {
                      !nowPlayingStore.isWorking && <View>
                        <CardItem header>
                            <Text>Stream info</Text>
                        </CardItem>

                        <CardItem>
                            <H1>{nowPlayingStore.nowPlayingName}</H1>
                            <Text>{nowPlayingStore.nowPlayingUrl}</Text>
                        </CardItem>

                        <CardItem header>
                            <Text>Volume</Text>
                        </CardItem>

                        <CardItem>
                            <Range
                              onValueChange={(v) => {nowPlayingStore.changeVolume(parseInt(v * 10) * 10)}}
                              value={nowPlayingStore.volume / 100}
                            />
                        </CardItem>
                      </View>
                    }
               </Card>
              </NativeBase.Content>

              <NativeBase.Footer >
                 <IosTabs/>
             </NativeBase.Footer>
          </NativeBase.Container>
        );
    }
}
